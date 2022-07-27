<template>
  <div>
    <div>
      <!--      {{comAdd}}-->
    </div>
    <div>
      {{count}} 来自转换出来的count和name
    </div>
    <hr>
    <div>
      {{name}}
    </div>
    <div>{{title}}</div>
    <!--    <div>{{sCount}}</div>-->
    <button @click="add">+1</button>
    <button @click="del">-1</button>
  </div>
</template>

<script>
import {computed} from 'vue'
import {useStore, mapState} from 'vuex'

export default {
  computed: {
    fullName: function(){
      return this.$store.state.name
    },
    // 其实内部也是找的 this.$store.state.title
    ...mapState(['title']) // 我们能在options API内直接解构就能在{{}}里用，那是因为mapState这个对象里，全是key-fn的键值对。 {count: fn, name: fn}
  },
  setup() {
    const store = useStore()
    // const comAdd = store.state.count
    //
    // const sCount = computed(() => {
    //   return store.state.count
    // })

    // stateFns => {count: fn, name: fn, title: fn}  => computed(内部要一个函数) => computed(count: fn) => ref对象
    const stateFns = mapState(['count', 'name', 'title'])
    console.log(stateFns)
    const stateInfo = {}
    Object.keys(stateFns).forEach(index => {
      // mapState其实内部也是找的 this.$store.state.title
      const fn = stateFns[index].bind({'$store': store})
      // Cannot read properties of undefined (reading 'state')
      // Vue3直接这样写找不到this
      // const fn = stateFns[index]
      stateInfo[index] = computed(fn);
    })

    return {
      // comAdd,
      // sCount,
      // ...stateFns,
      ...stateInfo
    }
  }
}
</script>

<style scoped>

</style>