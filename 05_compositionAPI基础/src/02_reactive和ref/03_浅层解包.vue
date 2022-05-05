<template>
  <div>
    <h2>{{name}}</h2>
    <h2>{{info}}</h2>
    <hr>
    这样就无法解包了
    ！！！最新的vue已经能够解包了，给ref对象作为别的普通对象的属性，template里不需要再去.value
    <h2>{{obj.name}}</h2>
    <hr>
    如果外层嵌套的reactive对象，那么内层的ref也是可以解包的
    <h2>{{foo}}</h2>
  </div>
</template>

<script>
import {reactive, ref} from "vue";

export default {
  name: "02_浅层解包",
  setup() {
    const name = ref(123)
    const info = reactive({age: 19})

    const obj = {
      name
    }
    const foo = reactive(name)
    return {
      name,
      info,
      obj,
      foo
    }
  }
}
</script>

<style scoped>

</style>
