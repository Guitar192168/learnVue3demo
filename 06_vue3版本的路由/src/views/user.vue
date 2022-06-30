<template>
  <div>
    <h2>
      user组件
    </h2>
    <h4>
      {{ $route.params.username }}
    </h4>
    <h3>
      {{ router.params }}
    </h3>
  </div>
</template>

<script>
// !!错误写法
// import { useRouter } from 'vue'

import { useRoute } from 'vue-router';

export default {
  name: 'user',
  created() {
    console.log(this.$route.params.username);
  },
  setup() {
    const router = useRoute()

    console.log(router.params, '先于created执行');
    console.log(router.params.username);

    return {
      router
    }
  }
}
</script>

<style>
</style>