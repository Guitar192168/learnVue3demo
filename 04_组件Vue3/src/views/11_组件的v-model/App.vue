<template>
<!--  <input type="text" v-model="message">-->
<!--  <input type="text" :value="message" @input="inputValue" >-->
  <div>
    v-model做了两件事
    1. v-bind绑定一个 v-bind:value绑定到message里面
    2. 监听输入事件@input 拿到$event里面的target.value，对message进行赋值
  </div>
  <input type="text" :value="message" @input="message = $event.target.value" >
  <h2>{{message}}</h2>
</template>

<script>
export default {
  name: "App.vue",
  data() {
    return {
      message: '你好'
    }
  },
  methods: {
    inputValue(e) {
      console.log(e)
      this.message = e.target.value
    }
  }
}
</script>

<style scoped>

</style>