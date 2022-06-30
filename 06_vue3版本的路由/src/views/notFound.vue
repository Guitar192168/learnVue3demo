<template>
  <div>
    我是404 Not Found
    <h3>
      {{router.params.patchMatch}}
    </h3>
  </div>
</template>

<script>
import {useRoute} from 'vue-router'

export default {
  name: "notFound",
  setup() {
    const router = useRoute()
    return {
      router
    }
  }
}
</script>

<style scoped>
div {
  color: #008c8c;
  font-size: 30px;
  font-weight: bold;
}
</style>