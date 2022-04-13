<template>
  <h2 class="home"></h2>
  <child :type="type"></child>
</template>

<script setup>
import child from './child'
import {reactive} from "vue";

const type = reactive({name: 1})
</script>
<style scoped>
h2 {
  color: pink;
}
</style>