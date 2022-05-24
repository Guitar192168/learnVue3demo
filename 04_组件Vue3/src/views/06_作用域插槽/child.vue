<template>
   <template v-for="(item, index) in names" :key="index">
     <slot :item="item" :index="index"></slot>
     <slot name="left"></slot>
   </template>
</template>

<script>
export default {
  name: "child",
  props: {
    names: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>