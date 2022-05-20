<template>
  <div>
    <h2>类似vue3的watch</h2>
    <input type="text" v-model="value">
  </div>
</template>

<script>
export default {
  name: "02_vm.$watch和主动停止",
  data() {
    return {
      value: 123
    }
  },
  mounted() {
    /**
     * string | Function} expOrFn
     {Function | Object} callback
     {Object} [options]
     *
     * 返回值 {Function} unwatch
     */
    const unwatch = this.$watch('value', (newVal, oldVal) => {
      console.log(newVal, 'newVal', oldVal, 'oldVal')
    }, {
      immediate: true, // 使用immediate时不能第一次执行回调时就取消侦听属性
      //头铁非要取消的话，先if判断一下有没有定义的unwatch
      deep: true
    })

    setTimeout(() => {
      unwatch()
      console.log('123')
    }, 2000)
  }
}
</script>

<style scoped>

</style>