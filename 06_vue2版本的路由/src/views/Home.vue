<template>
  <div class="home">
    {{ num }}
    <hr />
    <button @click="add">增加</button>
    <hr />
    <button @click="to">跳转</button>

      <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      num: 10
    }
  },
  methods: {
    add() {
      this.num++
    },
    to() {
      this.$router.push({ path: '/demo' })
    }
  }
}
</script>
