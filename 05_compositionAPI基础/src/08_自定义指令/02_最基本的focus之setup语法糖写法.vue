<template>
  <input type="text" ref="input">
  <div>123</div>
</template>

<script setup>
import {ref, onMounted} from 'vue'

const input = ref(null)

onMounted(() => {
  console.log(input.value, 'input');
  input.value.focus()
})

</script>

<style scoped>

</style>
