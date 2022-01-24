<template>
  <div>
    <h1 ref="title">title</h1>
  </div>
</template>

<script>
import { onMounted, ref, watchEffect } from "vue";
export default {
  setup() {
    const title = ref(null);

    console.log(title, "title");

    watchEffect(
      () => {
        console.log(title.value);
      },
      {
        // flush:'pre'//默认是pre, 是会提前执行，无论dom挂载完毕
        flush: "post", //这样就不会先出现null了
      }
    );

    onMounted(() => {
      console.log(title);
    });
    return {
      title,
    };
  },
};
</script>

<style>
</style>