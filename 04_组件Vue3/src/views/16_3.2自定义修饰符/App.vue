<template>
  <!--  比方说我们让.demo自定义修饰符让输入的message的首字母大写-->
  <customInput v-model.demo="message"></customInput>
  Vue3.2的自定义组件的{{message}}
</template>

<script setup>
import customInput from './child'
import {ref} from 'vue'

const message = ref('0')


</script>

<style>

</style>
