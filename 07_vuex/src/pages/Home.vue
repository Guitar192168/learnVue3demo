<template>
  <div>
    {{ $store.state.age }}
  </div>
  <button @click="submitAction">
    提交
  </button>
</template>
<script>
export default {
  methods: {
    submitAction() {
      console.log(this.$store, 'this.$store')
      this.$store.dispatch('increment')
    }
  }
}
</script>