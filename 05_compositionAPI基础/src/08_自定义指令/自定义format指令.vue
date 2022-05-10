<template>
  <div>
    <div v-format-time="'YYYY/MM'">{{ time2 }}</div>
  </div>
</template>

<script>
export default {
  setup() {
    const time2 = 1642684390797;
    return {
      time2,
    };
  },
};
</script>

<style>
</style>
