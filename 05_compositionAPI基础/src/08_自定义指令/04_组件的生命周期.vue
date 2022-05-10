<template>
  <input type="text"  v-input="show">
  <button @click="changeShow">测试</button>
</template>

<script>
import {ref} from 'vue'

export default {
  name: "04_组件的生命周期",
  setup() {
    const show = ref(true)
    const changeShow = () => show.value = !show.value
    return {
      show,
      changeShow
    }
  },
  directives: {
    input: {
      created() {
        console.log('created')
      },
      beforeMount() {
        console.log('beforeMount')
      },
      mounted() {
        console.log('mount')
      },
      beforeUpdate() {
        console.log('beforeUpdate')
      },
      updated() {
        console.log('updated')
      },
      beforeUnmount() {
        console.log('beforeUnmount')
      },
      unmounted() {
        console.log('unmounted')
      }
    }
  }
}
</script>

<style scoped>

</style>
