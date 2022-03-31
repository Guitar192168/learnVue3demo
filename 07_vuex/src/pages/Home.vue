<template>
  <div>
    {{ $store.state.a.age }}
  </div>
  <button @click="submitAction">提交</button>
  <button @click="demo">测试一下mutation修改状态的监听，快照</button>
</template>
<script>
export default {
  methods: {
    submitAction() {
      console.log(this.$store, "this.$store");
      this.$store.dispatch("increment");
    },
    demo() {
      this.$store.commit("a/increment");
    },
  },
};
</script>