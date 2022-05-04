<template>
  <div>
    <h1 ref="title">title</h1>
  </div>
</template>

<script>
import {onMounted, ref, watchEffect} from "vue";

export default {
  setup() {
    const title = ref(null);

    // console.log(title.value, "title");
    /**
     * 执行时机，watchEffect里两个参数，第二个参数是配置flush
     * 默认值是pre，表示预先加载，是在挂载或者更新之前执行的。这里监听DOM元素。是会先显示null的。
     * 而改为post则不会。等挂载完或者更新完才执行。
     * 还有个默认值sync，强制同步，不太推荐。
     */
    watchEffect(
      () => {
        console.log(title.value);
      },
      {
        // flush:'pre'// 默认是pre, 是在挂载或者更新之前执行的。这里监听DOM元素。是会先显示null的。
        flush: "post", //这样就不会先出现null了
      }
    );

    onMounted(() => {
      console.log(title.value);
    });
    return {
      title,
    };
  },
};
</script>

<style>
</style>
