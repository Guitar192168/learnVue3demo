<template>

</template>

<script>
import {h} from 'vue'
import myChild from "@/07_render函数和h函数的使用/myChild";

export default {
  name: "02_render函数使用子组件",
  setup() {
    return () => h(myChild, null, {
      // default插槽是一个函数
      default: props => h('h2', null, [
        h('i', null, 'App传入子组件插槽的内容之~~' + `${props.info.name}`)
      ])
    })
  }
}
</script>

<style scoped>

</style>
