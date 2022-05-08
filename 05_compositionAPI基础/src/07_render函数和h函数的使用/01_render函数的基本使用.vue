<!--<template>-->
<!--  render函数要求返回一个vNode，可以使用h函数来返回一个vNode-->
<!--  template中的HTML其实最终也是由render函数来生成对应的vNode-->
<!--</template>-->

<script>
import {ref, render, h} from 'vue'

export default {
  name: "App.vue",
  /**
   * h函数接收三个参数。
   * 标签名，组件名 string | Object | Function   必传
   * props 非必传，可以传null
   * string | Array | Object children或者是文字
   */
  // render() {
  //   return h('div', null, '123')
  // }
  setup() {
    /**
     * setup本身就是一个函数类型，需要返回一个vNode
     * 由函数返回h函数，再返回vNode    可以替代render
     */
      //错误写法
      // return render(){
      //   return h('div', null, '123')
      // }

      // return () => h('div', {class: 'title'}, 456)

    const num = ref(0)
    return () => h('div', {class: 'title'}, [
      h('div', null, `当前计数${num.value}`),
      h('button', {
        onClick: () => {
          num.value++
        }
      }, '+1'),
      h('button', {
        onClick: () => {
          num.value--
        }
      }, '-1')
    ])
  }
}
</script>

<style scoped>

</style>
