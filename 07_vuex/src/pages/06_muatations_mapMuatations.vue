<template>
  <div>
    <div>{{ $store.state.age }}</div>
    <button @click="del">11减少</button>
    <button @click="increment">通过mapMuatations解构的新增</button>
    <!--    DE_CREMENT 这里不能直接写 变量，除非提前定义过-->
    <button @click="decrement({number:10})">通过mapMuatations解构 + 常量的标识符大写 的减少</button>
    <!--    <button @click="Sincrement">通过mapMuatations解构的新增</button>-->
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {DE_CREMENT, IN_CREMENT} from "../store/mutations-type.js";
//muatations内部的函数必须是同步的
export default {
  name: "06_muatations",
  setup() {

    const muatationButton = mapMutations(['increment', DE_CREMENT])

    //！！！ DE_CREMENT 实际导入的还是  'decrement'
    console.log(DE_CREMENT, 'DE_CREMENT', [DE_CREMENT],'[DE_CREMENT]')
    // const muatationButton = mapMutations({
    //   Sincrement: 'increment'
    // })
    return {
      ...muatationButton
    }
  },
  methods: {
    del() {
      //传对象，字面量都行的
      // this.$store.commit('decrement', 1)
      // this.$store.commit('decrement', {number: 1})

      //对象的提交方式
      // this.$store.commit({
      //   type: 'decrement', //!!这里的type必须正确，与store/index.js内的mutations内的方法保持一致 防止出错，我们可以定义常量
      //   number: 1,
      // })

      // this.$store.commit({
      //   type: DE_CREMENT,
      //   number: 2
      // })

    }
  }
}
</script>

<style scoped>

</style>