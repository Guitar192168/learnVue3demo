<template>
  <div>
    {{$store.state.count}}
    <hr>
    <button @click="add">+1</button>
    <button @click="del">-1</button>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    add(){
      this.$store.commit('increment')
    },
    del(){
      this.$store.commit('decrement')
    }
  }
}
</script>

<style scoped>

</style>