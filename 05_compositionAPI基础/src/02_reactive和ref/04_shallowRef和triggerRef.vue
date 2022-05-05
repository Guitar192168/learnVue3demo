<template>
  <h2>{{info}}</h2>
  <button @click="changeName">修改shallowRef的值</button>
</template>

<script>
import {shallowRef, triggerRef} from 'vue'

export default {
  name: "04_shallowRef和triggerRef",
  setup() {
    let info = shallowRef({name: 123})
    const changeName = () => {
      // info.name = 456
      console.log(info)
      console.log(info.value, '其实此时name在控制台已经显示为456了，但是没有响应式的修改到template中的数据')
      info.value.name = 456
      //手动触发，需要传入一个ref，这里把info传入了
      triggerRef(info)
    }

    return {
      info,
      changeName
    }
  }
}
</script>

<style scoped>

</style>
