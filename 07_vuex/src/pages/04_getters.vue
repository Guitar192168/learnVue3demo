<template>
  <div>
    {{ $store.getters.totalPrice }}
  </div>
  <hr>
  <div>
    {{ totalPrice }}
  </div>
  <hr>
  <div>
    {{ $store.getters.defineArg(1212) }}

  </div>
  <div>过滤大于25块的书籍的总价格 {{ $store.getters.totalPriceAboutNumberThanThree(25) }}
  </div>
</template>

<script>
export default {
  computed: {
    totalPrice() {
      return this.$store.getters.totalPrice
    }
  },
  methods: {}
}

</script>

<style scoped>

</style>