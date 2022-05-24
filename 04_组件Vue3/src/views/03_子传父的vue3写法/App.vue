<template>
  <h2 class="home"></h2>
  {{num}}
  <child @add="addNum" @sub="subNum" :type="type"></child>
</template>

<script setup>
import child from './child'
import {reactive, ref} from "vue";

const num = ref(0)
const type = reactive({name: 1})
const addNum = (params) => {
  console.log(params)
  // 可以直接拿到参数的
  num.value += params
}
const subNum = ({name, num}) => {
  console.log(num)
  num.value -= num.value
}
// const subNum = (params) => {
//   console.log(params)
//   num.value -= params.num
// }
</script>
<style scoped>
h2 {
  color: pink;
}
</style>
