<template>
  <div>
    {{ info }}
    <button @click="changeAge">修改数据</button>
  </div>
</template>

<script>
import { reactive, ref, watch } from "vue";
export default {
  setup() {
    const info = reactive({ name: "zhangsan", age: 19 });
    const number = ref(10);

    const changeAge = () => {
      info.age++;
      number.value++;
    };

    // 1.传入一个getter函数
    watch(
      () => info.age,
      (newValue, oldValue) => {
        console.log(newValue, "newValue", oldValue, "oldValue");
      }
    );

    // 传入一个可响应式对象  reactive或者ref对象

    // 情况1 传入一个reactive对象     newValue和oldValue返回的是reactive对象
    watch(info, (newValue, oldValue) => {
      console.log(newValue, "newValue", oldValue, "oldValue");
    });

    // 如果希望返回的newValue和oldValue  则可以对info对象进行解构处理

    // 其实，还可以重叠，多个watch监听同一个对象，也不会冲突，覆盖，都会执行的
    watch(
      () => {
        return { ...info };
      },
      (newValue, oldValue) => {
        console.log(newValue, "newValue", oldValue, "oldValue")
      }
    );

    // 情况2  传入一个ref对象   返回的是value值，而不是ref对象
    watch(number, (newValue, oldValue) => {
      console.log(newValue, "newValue", oldValue, "oldValue");
    });



    return {
      info,
      changeAge,
    };
  },
};
</script>

<style>
</style>