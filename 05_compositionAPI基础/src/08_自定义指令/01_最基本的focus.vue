<template>
  <h2> template这里对 ref的传参有特殊处理，不需要 :ref加个冒号才能使用变量</h2>
  <input type="text" ref="input">
</template>

<script>
import {ref, onMounted} from "vue";

export default {
  setup() {
    const input = ref(null)
    onMounted(() => {
      /**
       * 需要注意，这里定义的input=ref(null)是ref响应式对象。要拿到DOM元素，需要ref.value才能获取到
       */
      console.log(input.value, '才能拿到DOM元素')
      input.value.focus()
    })
    return {
      input
    }
  }
}
</script>

<style scoped>

</style>
