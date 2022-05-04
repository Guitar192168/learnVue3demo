<template>
  <input type="text" v-model="value">
  <h3>{{value}}</h3>
</template>

<script>
import {ref} from 'vue'
import {debounceRef} from "@/02_reactive和ref/hook/debounceRef";

export default {
  name: "06_customerRef",
  setup() {
    // const value = ref(1234)
    const value = debounceRef(1234)
    return {
      value
    }
  }
}
</script>

<style scoped>

</style>
