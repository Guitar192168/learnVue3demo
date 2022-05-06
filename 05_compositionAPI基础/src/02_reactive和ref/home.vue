<template>
  <div>
    我是子组件
    {{name}}
  </div>
</template>

<script setup>
import {ref} from 'vue'

const name = ref(123)
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
