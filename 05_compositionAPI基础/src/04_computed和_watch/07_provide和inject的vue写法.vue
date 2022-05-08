<template>
  <h2>provide的作用：来提供数据</h2>
  <hr>
  <child></child>
  <hr>
  目前来看，子孙组件必须有被使用到，才会被inject接收到。
  <div>
    父组件的num: {{num}}
  </div>
  <button @click="increment">父组件的button</button>
</template>

<script>
import {ref, provide, readonly} from "vue";
import child from "./child.vue";

export default {
  name: "07_provide和inject的vue写法",
  components: {
    child
  },
  setup() {
    const num = ref(123)
    console.log('不适合直接给num定义为readonly类型的，这样父组件也无法修改数据了。最好是在provide传递的时候，给ref响应式数据变为readonly的')
    // const num = readonly(123)
    const info = {
      name: 1,
      age: 18
    }
    /**
     * 传入两个参数
     * 第一个是 name属性名称
     * 第二个 value 属性值
     */
    // provide('num', num)
    provide('num', readonly(num))
    provide('info', info)

    const increment = () => num.value++
    return {
      num,
      increment
    }
  }
}
</script>

<style scoped>

</style>
