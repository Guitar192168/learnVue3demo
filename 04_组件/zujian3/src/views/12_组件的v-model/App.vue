<template>
  <!--  <child v-model="message"></child>-->

  <!--  多个v-model-->
  <child v-model="message"></child>

  <hr>
  <br>
  <br>
  <br>
  {{message}}
  <h2>等同于</h2>
  <!--  input标签之所以是 $event.target.value是因为它是原生组件，原生的值就是在$event.target,value上-->
  <!--  <child :modelValue="message" @update:modelValue="show"></child>-->
  <!--  <child :modelValue="message" @update:modelValue="message = $event"></child>-->
</template>

<script>
import child from "./child";

export default {
  name: "App",
  components: {
    child
  },
  data() {
    return {
      message: '父组件的数据'
    }
  }
}
</script>

<style scoped>

</style>
