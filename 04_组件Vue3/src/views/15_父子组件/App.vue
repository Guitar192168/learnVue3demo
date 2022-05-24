<template>
  <child></child>
<!--  <div ref="user">父组件</div>-->
  <img src="https://res.cngoldres.com/upload/stock/2016/8/11/8f5652759a806c13e180d9e11c9572b2.jpg" alt="">

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
