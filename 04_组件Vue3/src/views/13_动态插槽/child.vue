<template>
  <h2>
    <slot :name="name"></slot>
  </h2>
</template>

<script>
export default {
  name: "child",
  props: {
    name: String
  }
}
</script>

<style scoped>

</style>
