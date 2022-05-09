<template>
  <input type="text" v-focus>
</template>

<script>
export default {
  name: "03_局部指令",
  directives: {
    focus: {
      mounted(el) {
        console.log(el, '局部指令。同名的全局指令时，局部的优先级更高的')
        el.focus()
      }
    }
  }
}
</script>

<style scoped>

</style>
