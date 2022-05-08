<template>
  <h2>
    inject 后代组件来注入需要的内容
  </h2>
  <h2>{{info}}</h2>
  <div>子组件的num:{{num}}</div>
  <button @click="increment">子组件的点击事件</button>
</template>

<script>
import {inject} from "vue";

export default {
  name: "child",
  setup() {
    const info = inject('info')
    const num = inject('num')
    console.log(info, 'inject接收到的')
    /**
     * 这样造成了子组件修改inject注入的数据的时候，父组件自身project的数据也会被修改。
     */
    const increment = () => num.value++
    return {
      info,
      num,
      increment
    }
  }
}
</script>

<style scoped>

</style>
