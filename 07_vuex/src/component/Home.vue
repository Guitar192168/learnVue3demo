<template>
  <div>
    {{ $store.getters.totalPrice }}
  </div>
  <div>
    {{ totalPrice }}
  </div>
</template>

<script>
export default {
  computed: {
    totalPrice() {
      return this.$store.getters.totalPrice({name: 111})
    }
  },
  methods: {}
}

</script>

<style scoped>

</style>