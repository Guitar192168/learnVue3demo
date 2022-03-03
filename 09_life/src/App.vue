<template>
  <div id="app">
    <Father></Father>
  </div>
</template>

<script>
import Father from "./components/Father.vue";
export default {
  name: "App",
  components: {
    Father
  },
  errorCaptured(err, vm, info) {
    console.log('err', err);
    console.log('vm', vm);
    console.log('info', info);
    debugger
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
