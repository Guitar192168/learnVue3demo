<template>
  <child ref="title"></child>
  <button @click="showBtn">查看ref</button>
</template>

<script>
import child from './child'

export default {
  name: "App",
  components: {
    child
  },
  data() {
    return {
      name: '父组件的name'
    }
  },
  methods: {
    showBtn() {
      console.log(this.$refs.title.message);
      console.log(this.$refs.title.$el);
      this.$refs.title.childMethod()
    }
  }
}
</script>

<style scoped>

</style>