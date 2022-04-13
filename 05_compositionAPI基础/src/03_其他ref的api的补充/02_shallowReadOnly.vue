<template>
  <div>
    {{ info }}
    {{ info.people }}
    <button @click="info.age = 20">修改外层</button>
    <!-- <button @click="info.people.age = 'lisi'">修改内存</button> -->
    <button @click="changeInside">修改内层</button>
  </div>
</template>

<script>
import { shallowReadonly } from "vue";
export default {
  setup() {
    const info = shallowReadonly({ age: 18, people: { name: "zhangsan" } });

    const changeInside  = () => {
        info.people.name = 'lisi'
    }

    console.log(info);

    return {
      info,
      changeInside
    };
  },
};
</script>

<style>
</style>