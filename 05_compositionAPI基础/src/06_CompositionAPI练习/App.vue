<template>
  <div class="container">
    <h2>{{counter}}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="changeTitle">修改title的名字</button>
    <hr>
    <div class="scroll">
      <div>scrollX:{{scrollX}}</div>
      <div>scrollY:{{scrollY}}</div>
    </div>
    <div class="mouse">
      <div>mouseX:{{mouseX}}</div>
      <div>mouseY:{{mouseY}}</div>
    </div>

    <hr>
    {{res}}
  </div>
</template>

<script>
// import {useTitle} from "@/06_CompositionAPI练习/hooks/useTitle";
// import {useCounter} from "@/06_CompositionAPI练习/hooks/useCounter";
// import {useScrollPosition} from "@/06_CompositionAPI练习/hooks/useScrollPosition";
// import {useMousePosition} from "@/06_CompositionAPI练习/hooks/useMousePosition";
// import {useLocalStorage} from "@/06_CompositionAPI练习/hooks/useLocalStorage";

import {useCounter, useTitle, useScrollPosition, useMousePosition, useLocalStorage} from './hooks'

export default {
  name: "01_useCounter",
  setup() {
    let {counter, increment, decrement} = useCounter()

    console.log(useTitle('你好'));
    const title = useTitle('你好')
    const changeTitle = () => {
      title.value = '123'
    }

    const {scrollX, scrollY} = useScrollPosition()


    const {mouseX, mouseY} = useMousePosition()


    const info = {name: 123, age: 18}
    //获取
    let res = useLocalStorage('info123', info)
    // 修改
    res.name = 123
    // console.log(res.name = 123);
    return {
      counter,
      increment,
      decrement,
      // 虽然也可以直接对返回值使用拓展运算符。但是不够清晰的知道是哪个hook里面的方法了。
      // ...useCounter,

      changeTitle,

      scrollX,
      scrollY,

      mouseX,
      mouseY,

      res
    }
  }
}
</script>

<style scoped>
.container {
  height: 3000px;
  width: 3000px;
}


.scroll {
  position: fixed;
  right: 30px;
  bottom: 30px;
}
</style>
