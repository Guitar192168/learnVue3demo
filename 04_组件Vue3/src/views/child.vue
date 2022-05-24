<template>
  <h2>我是子组件 Vue3
    <div>
      {{type}}
    </div>
  </h2>

</template>
<!--<script setup>-->
<!--const props = defineProps({-->
<!--  type: Object-->
<!--})-->
<!--</script>-->
<script>
export default {
  props: {
    //也可以接收数组形式的传参
    //自定义校验函数
    type: {
      validateType(value) {
        if (value.hasOwnProperty('name')) return true
      }
    }
  }
}
</script>
<style scoped>

</style>