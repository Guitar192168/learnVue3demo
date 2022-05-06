<template>
  <h2>{{}}</h2>
  <button @click="show">查看组件的ref</button>
  <hr>
  <home ref="child"></home>

</template>

<script setup>
import home from "./home.vue";
import {ref} from 'vue'
const child = ref(null)
const show = () => {
  console.log(child.value.name)
}
</script>

<style scoped>

</style>
