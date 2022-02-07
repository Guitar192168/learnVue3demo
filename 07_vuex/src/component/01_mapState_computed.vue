<template>
  <!--  <div>age:{{ $store.state.age }}</div>-->
  <!--  <div>computed的{{ sStore.name }}</div>-->
  <!--  <div>computed的{{ sStore.age }}</div>-->
  <!--  <hr>-->
  <!--    <div>computed的{{ sName }}</div>-->
  <!--  <hr>-->
  <!--  <div>使用mapState的state: {{ name }}</div>-->
  <!--  <div>使用mapState的state: {{ age }}</div>-->

  <!--  <button @click="addAge">-->
  <hr>
  <div>mapState的对象写法: {{ sName2 }}</div>
  <div>mapState的对象写法: {{ sAge2 }}</div>
  <button @click="$store.commit('increment')">
    +1
  </button>
  <button @click="delAge">
    -1
  </button>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "Home",
  computed: {
    // sStore() {
    //   return this.$store.state
    // },
    // sName() {
    //   return this.$store.state.age
    // },
    //其他的计算属性，从state获取
    // ...mapState(['name', 'age'])//数组写法
    ...mapState({
      sName2: state => state.name, //值是一个函数
      sAge2: state => state.age
    })
  },
  // computed:mapState(['name','age']), //是返回一个对象的
  methods: {
    addAge() {
      this.$store.commit('increment')
    },
    delAge() {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style scoped>

</style>