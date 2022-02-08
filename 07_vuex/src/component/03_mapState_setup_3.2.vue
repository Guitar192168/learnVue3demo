<!--解构，把变量声明出来-->
<template>
  <!--  <div>{{ store }}</div>-->
  <!--  <div>{{ sName }}</div>-->
  <!--  <div>{{ sAge }}</div>-->

  <!--  返回的函数-->
  <!--  <div>{{ name() }}</div>-->
  <div>{{ name }}</div>
  <hr>
  <div>{{ age }}</div>
  <div>{{ stateStore }}</div>
</template>

<script setup>
import {useStore, mapState} from 'vuex'
import {computed, toRefs} from "vue";

const store = useStore()
// computed(接收一个函数或者一个对象)
const sName = computed(() => store.state.name)
const sAge = computed(() => store.state.age)
//这里如何将 storeState的属性 => 由function => 经过computed(function)包裹 => 返回ref对象
//{name:ref对象, age: ref } 再解构的时候就是将这些ref对象return了出去
const storeStateFns = mapState(['name', 'age'])
let stateStore = {}
Object.keys(storeStateFns).forEach(fnKey => {
  const fn = storeStateFns[fnKey].bind({$store: store})
  stateStore[fnKey] = computed(fn)
})
console.log(stateStore, 'stateStore')
const {name, age} = toRefs(stateStore)

</script>

<style scoped>

</style>