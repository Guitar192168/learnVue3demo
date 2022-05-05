<template>
  <child></child>
<!--  <div ref="user">父组件</div>-->

</template>

<script>
import child from "./child";

export default {
  name: "App",
  components: {
    child
  },
  mounted() {
    console.log(this.$refs.user, '父组件')
  },

}
</script>

<style scoped>

</style>
