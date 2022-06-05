<template>
  <div class="home">
    <button @click="changeLoading">修改loading</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  methods: {
    changeLoading() {
      this.$loading.show()
      setTimeout(() => {
        this.$loading.close()
      }, 3000)
    }
  }
}
</script>
<style>
.home{
  height: 300px;
  width: 300px;
}
</style>
