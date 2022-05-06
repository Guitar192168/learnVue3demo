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
const father = ref(789)
const show = () => {
  console.log(child.value.name)
}
defineExpose(({
  father
}))
</script>

<style scoped>

</style>
