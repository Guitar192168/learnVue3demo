<template>
  <div id="app">
    <div style="height: 200px;width: 200px" v-loading="loading"></div>
    <p v-loading="loading"></p>
    检查是否是默认值
    <Home></Home>

  </div>

</template>
<script>
import Home from './views/Home'

export default {
  components: {
    Home
  },
  data() {
    return {
      loading: true
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
