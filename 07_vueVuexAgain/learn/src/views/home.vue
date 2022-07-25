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
    // 其实内部也是找的 this.$store.state.title
    ...mapState(['title'])
  },
  setup() {
    const store = useStore()
    // const comAdd = store.state.count
    //
    // const sCount = computed(() => {
    //   return store.state.count
    // })

    const stateFns = mapState(['count', 'name', 'title'])
    console.log(stateFns)
    const stateInfo = {}
    Object.keys(stateFns).forEach(index => {
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