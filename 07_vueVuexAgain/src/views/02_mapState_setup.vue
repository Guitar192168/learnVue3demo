<template>
  <div>
    {{$store.state.count}}
    <hr>
    <div>
      {{comAdd}}
      <div>
        来自Vue3的useStore
      </div>
    </div>
    <div>
      {{count}}
    </div>
    <div>{{sCount}}</div>
    <button @click="add">+1</button>
    <button @click="del">-1</button>
  </div>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'

export default {
  setup() {
    const store = useStore()
    const comAdd = store.state.count

    const sCount = computed(() => {
      return store.state.count
    })

    return {
      comAdd,
      sCount
    }
  }
}
</script>

<style scoped>

</style>