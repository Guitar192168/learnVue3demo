<template>
  <div>
    <div>{{ $store.state.age }}</div>
    <button @click="del">减少</button>
    <!--    <button @click="increment">通过mapMuatations解构的新增</button>-->
    <button @click="SIncrement">通过mapMuatations解构的新增</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: "06_muatations",
  setup() {

    // const muatationButton = mapMutations(['increment'])
    const muatationButton = mapMutations({
      SIncrement: 'increment'
    })

    return {
      ...muatationButton
    }
  },
  methods: {
    del() {
      //传对象，字面量都行的
      // this.$store.commit('decrement', 1)
      this.$store.commit('decrement', {number: 1})
      //对象的提交方式
      // this.$store.commit({
      //   type: 'decrement',
      //   number: 1,
      // })
    }
  }
}
</script>

<style scoped>

</style>