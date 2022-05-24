<template>
  <div>
    <h2>
      我是子组件
    </h2>
    <span>测试一下</span>
    <button @click="childMethod">子组件的button</button>
  </div>
</template>

<script>
export default {
  name: "child",
  data() {
    return {
      message: '我是子组件的message'
    }
  },
  methods: {
    childMethod() {
      console.log(this.$parent.name)
      console.log('我是子组件的方法')
    }
  }
}
</script>

<style scoped>

</style>