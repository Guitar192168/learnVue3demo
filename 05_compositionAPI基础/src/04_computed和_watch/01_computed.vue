<template>
  <div>
    {{ fullName }}

    <button @click="changeName">修改name</button>
    {{ allName }}
  </div>
</template>

<script>
import { ref, computed } from "@vue/runtime-core";
export default {
  setup() {
    const firstName = ref("张");
    const lastName = ref("小");

    // 接收一个getter函数，并且返回一个只读的ref对象      ps: 返回一个不变的 ref 对象
    const fullName = computed(() => {
      return firstName.value + " " + lastName.value;
    });

    // set和get
    const allName = computed({
      get: () => {
        return firstName.value + " " + lastName.value;
      },
      set: (newValue) => {//返回一个可变的（可读写）ref 对象；
        console.log(newValue);
        const name = newValue.split("的");
        firstName.value = name[0];
        lastName.value = name[1];
      },
    });

    const changeName = () => {
      //   firstName.value = "james";
      //   lastName.value = "kobe";
      //   fullName.value = "修改computed的name";
      allName.value = "修改computed的name"; //这个修改的值会给到set函数里的newValue
    };

    return {
      fullName,
      allName,
      changeName,
    };
  },
};
</script>

<style>
</style>
