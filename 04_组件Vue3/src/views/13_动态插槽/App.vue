<template>
  <child :name="name">
    <template v-slot:[name]>
      <div>我是插槽1</div>
    </template>
    <template v-slot:[name]>
      <div>我是插槽2</div>
    </template>
    <template v-slot:[name]>
      <div>我是插槽3</div>
    </template>
  </child>
</template>

<script>
import child from "./child";

export default {
  name: "App",
  components: {
    child
  },
  data() {
    return {
      name: 'yang'
    }
  }
}
</script>

<style scoped>

</style>
