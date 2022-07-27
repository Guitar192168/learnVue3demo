<template>
  <!--  <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">-->
  <input type="text" :value="modelValue" @input="valueChange($event)">
</template>

<script setup>
import {defineProps, defineEmits} from 'vue'

defineProps({
  modelValue: String,
})

// 返回这个emit
const emit = defineEmits(['update:modelValue'])


const valueChange = (e) => {
  console.log(e.target.value)
  emit('update:modelValue', e.target.value)
}


</script>

<style>

</style>
