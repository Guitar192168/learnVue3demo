<template>
  <h2>{{num}}</h2>
  <button @click="increment">修改num，查看生命周期</button>
  <h2>vue3里面没有beforeCreate和created是因为setup就是围绕着这两个生命周期在执行的。所以不需要显示的执行这两个钩子函数</h2>
  <h2>或者说，要在这两个生命周期钩子函数内执行的，都可以直接放在setup内执行</h2>
</template>

<script>
import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted,onActivated,onDeactivated} from "vue";

export default {
  name: "App.vue",
  setup() {
    onMounted(() => {
      console.log('我是onMounted函数')
    })
    onBeforeMount(() => {
      console.log('onBeforeMount钩子')
    })

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate钩子')
    })

    onUpdated(() => {
      console.log('onUpdated钩子')
    })

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount钩子')
    })

    onUnmounted(() => {
      console.log('onUnmounted钩子')
    })

    let num = ref(1)
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
