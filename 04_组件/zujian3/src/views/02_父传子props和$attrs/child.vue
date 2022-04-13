<template>
  <h2>我是子组件 Vue3
    <div :title="$attrs.id">
      {{type}}
    </div>
    $attrs可以拿到非props的attributes，然后赋值给子元素的其他标签
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
    //返回true说明校验成功，通过
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