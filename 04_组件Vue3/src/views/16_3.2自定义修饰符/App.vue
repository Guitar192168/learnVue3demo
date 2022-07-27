<template>
  <customInput v-model="message"></customInput>
  {{message}}
</template>

<script setup>
import customInput from './child'
import {ref} from 'vue'

const message = ref('0')


</script>

<style>

</style>
