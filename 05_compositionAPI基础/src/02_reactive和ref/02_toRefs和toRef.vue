<template>
  <h2>ObjectRefImpl</h2>
  <h2>{{name}}</h2>
  <h2>{{age}}</h2>
  <button @click="changeAge">
    修改一下toRefs解构出来的ref对象的value
  </button>
  <hr>
  <div>通过toRef解构的，不需要加{}</div>
  <div>使用toRef需要指定解构那个key出来</div>
  <h2> {{num}}</h2>
  <button @click="changeNum">修改一下从toRef解构出来的ref对象的value</button>
</template>

<script>
import {reactive, toRefs, toRef, ref} from "vue";

export default {
  name: "toRefs",
  setup() {
    const info = reactive({name: 1, age: 18})
    const {name, age} = toRefs(info)
    console.log('实际上是info.name和ref.value 之间建立了连接，只要一个有修改，另一个也会跟着被修改')
    // 解构出来的两个都是值都是ref对象，都是响应式
    console.log(name, age)

    const obj = reactive({num: 19})
    // 使用toRef需要指定解构那个key出来
    const num = toRef(obj, 'num')
    // 修复toRefs解构出来的ref对象的value
    const changeAge = () => {
      age.value = 123
    }
    // 修改toRef解构出来的red对象的value
    const changeNum = () => {
      num.value = 456
    }
    console.log(num)
    return {
      name, age, num,
      changeAge,
      changeNum
    }
  }
}
</script>

<style scoped>

</style>
