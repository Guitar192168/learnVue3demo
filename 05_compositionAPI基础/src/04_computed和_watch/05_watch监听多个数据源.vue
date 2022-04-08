<template>
  <div>
    user

    <button @click="changeData">修改数据</button>
  </div>
</template>

<script>
import { reactive, ref, watch } from "vue";
export default {
  setup() {
    const user = reactive({ name: "zhangsan", age: 19 });
    const number = ref(100);
    const changeData = () => {
      user.name = "lisi";
      user.age++;

      number.value++;
    };

    // wat ch([user, number], (newValue, oldValue) => {
    watch([() => ({ ...user }), number], (newValue, oldValue) => {
      console.log(newValue, "newValue", oldValue, "oldValue");
    });

    // 默认就是深度侦听
    watch(
      () => ({ ...user }),
      (newValue, oldValue) => {
        console.log(newValue, "newValue", oldValue, "oldValue");
      },
      {
        deep: true,
        immediate: true,
      }
    );
    return { user, changeData };
  },
};
</script>

<style>
</style>