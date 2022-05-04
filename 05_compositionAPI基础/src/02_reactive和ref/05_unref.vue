<template>
  直接能拿到ref对象的value
  比起用 ref.value，可能引起的报错，好一点。
  <h2>
    {{age}}
  </h2>
</template>

<script>
import {unref, ref} from "vue";

export default {
  name: "unRef",
  setup() {
    const age = ref(123)
    const demo = unref(age)
    /**
     * unRef是语法糖  unRef :   isRef(info) ? info.value : info
     */
    console.log(demo)
    return {
      age
    }
  }
}
</script>

<style scoped>

</style>
