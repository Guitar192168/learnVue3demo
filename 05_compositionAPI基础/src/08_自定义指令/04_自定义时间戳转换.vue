<template>
  <div v-format-time>
    {{new Date().getTime()}}
  </div>
</template>

<script>
export default {
  name: "04_自定义时间戳转换"
}
</script>

<style scoped>

</style>
