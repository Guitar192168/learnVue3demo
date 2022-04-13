<template>
  <div>
    {{ info }}
    <button @click="testShallowRef">测试一下浅层的ref对象</button>
  </div>
</template>

<script>
import { ref, shallowRef, triggerRef } from "vue";
export default {
  setup() {
    // let info = ref({ age: 18 });

    // 浅层的响应式
    let info = shallowRef({ age: 18 });

    const testShallowRef = () => {
      info.value.age++;

      // info.value = {} 除非直接对整个value修改成别的对象

      //   手动触发响应式
      //   手动触发和shallowRef的副作用
      triggerRef(info);
    };

    return {
      info,
      testShallowRef,
    };
  },
};
</script>

<style>
</style>