<template>
  <div>
    我是子组件
    {{name}}

    <hr>
    <button @click="show">获取父组件的暴露的值</button>
  </div>
</template>

<script setup>
import {ref, getCurrentInstance} from 'vue'

const name = ref(123)
const vm = getCurrentInstance()

const show = () => {
  console.log(vm.$parent,'这里直接是undefined了')
  console.log('vm.$parent', vm.parent.exposed.father.value)
  console.log('vm.$parent', vm.parent.exposeProxy.father)
}
defineExpose({
  name
})
</script>

<!--<script>-->
<!--import {ref} from 'vue'-->

<!--export default {-->
<!--  setup() {-->
<!--    const name = ref(123)-->
<!--    return {-->
<!--      name-->
<!--    }-->
<!--  }-->
<!--}-->

<!--</script>-->
<style scoped>

</style>
