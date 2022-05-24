<template>
  <button @click="add">+</button>
  <button @click="sub">-</button>
</template>
<script>
export default {
  emits: ['add', 'sub'],
  props: {
    //也可以接收数组形式的传参
    //自定义校验函数
    type: {
      validateType(value) {
        if (value.hasOwnProperty('name')) return true
      }
    }
  },
  methods: {
    add() {
      this.$emit('add', 1)
    },
    sub() {
      this.$emit('sub', {
        num: 2,
        age: 20
      })
    }
  }
}
</script>
<style scoped>

</style>