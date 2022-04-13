<template>
  <div class="about">
    <button @click="user">测试一下</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {name: 123}
    }
  },
  props: {
    user: {
      type: Object,
      default: () => {
        return {name: 456}
      }
    }
  },
  created() {
    console.log('来自created', this.$props.user, this.user)
  },
  methods: {
    user() {
      console.log('user', this.$props.user, this.user)
    }
  }
}
</script>
