<template>
  <div>
    {{$store.state.count}}
    <hr>
    <div>
      {{comAdd}}
    </div>
    <div>
      {{count}}-{{name}}-{{title}}
    </div>
    <div>对象写法</div>
    <div>{{sName}}-{{sCount}}</div>
    <button @click="add">+1</button>
    <button @click="del">-1</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "home",
  computed: {
    comAdd() {
      return this.$store.state.count
    },
    SCount: function () {
      // 我们的计算属性，都是 key对于一个function
    },
    ...mapState(['count', 'name', 'title']), // 接受数组的写法，也接受对象的写法
    ...mapState({
      sCount: state => state.count,
      sName: state => state.name
    })
  },
  methods: {
    add() {
      this.$store.commit('increment')
    },
    del() {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style scoped>

</style>