<template>
  <h2>
    我是category组件

  </h2>
  <div>
    {{name}}
  </div>
</template>

<script>
export default {
  name: "category",
  props: {
    name: String
  }
}
</script>

<style scoped>

</style>