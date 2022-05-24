<template>
  <button @click="changeHome">Home</button>
  <button @click="changeChild">Child</button>
  <component :is="cpns[model]"></component>
  <hr>
  {{cpns}}
</template>

<script>
import Home from "./home";
import Child from './child'
import {reactive, ref} from 'vue'

export default {
  name: "App",
  components: {
    Home,
    Child
  },
  setup() {
    const cpns = reactive({'home': Home, 'child': Child})
    const model = ref('')
    const changeHome = () => {
      model.value = 'home'
    }

    const changeChild = () => {
      model.value = 'child'
    }
    return {
      cpns,
      model,
      changeHome,
      changeChild
    }
  }
}
</script>

<style scoped>

</style>