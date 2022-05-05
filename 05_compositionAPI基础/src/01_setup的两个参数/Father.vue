<template>
  <AppVue id="demo" :message="message">
    <template v-slot:left> 测试一下context获取插槽</template>
  </AppVue>
</template>

<script>
import AppVue from "@/01_setup的两个参数/App";
import {reactive} from "vue";

export default {
  name: "Father",
  components: {
    AppVue
  },
  setup() {
    const message = reactive({name: 1})
    return {
      message
    }
  }
}
</script>

<style scoped>

</style>
