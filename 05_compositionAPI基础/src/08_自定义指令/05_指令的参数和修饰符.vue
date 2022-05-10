<template>
  <div v-input.abc.NBA="'hello'">123</div>
  <img src="https://res.cngoldres.com/upload/stock/2016/8/11/8f5652759a806c13e180d9e11c9572b2.jpg" alt="">
</template>

<script>
export default {
  name: "05_指令的参数和修饰符",
  data() {
    return {
      // imgUrl: require('https://res.cngoldres.com/upload/stock/2016/8/11/8f5652759a806c13e180d9e11c9572b2.jpg')
    }
  },
  // setup() {
  //
  //   return {
  //     imgUrl
  //   }
  // },
  directives: {
    input: {
      mounted(el, binding) {
        console.log(el)
        console.log(binding)
        /**
         * 设置了修饰符的时候，binding.modifiers里就会获取到对应的内容。是一个对象结构。设置了的修饰符，值为true
         * binding.value存储的是指令传入的值
         */
        console.log(binding.modifiers)
      }
    }
  }
}
</script>

<style scoped>

</style>
