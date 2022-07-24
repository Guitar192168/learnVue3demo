<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ value }}
    <button @click="add">添加</button>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'About',
  beforeRouteLeave(to, from){
    console.log('父级About组件里面的beforeRouteLeave的to', to, from)
  },
  data() {
    return {
      value: 0
    }
  },
  created() {
    // console.log(this.$route);
  },
  // activated() {
  //   console.log('activated');
  // },
  methods: {
    add() {
      this.value++
    }
  }
}

</script>
