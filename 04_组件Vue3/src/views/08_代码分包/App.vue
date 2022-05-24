<template>
  <div>

  </div>
  <child></child>
</template>

<script>
// import sum from "@/views/08_代码分包/utils/sum";
// 如果导出的是export default的方式，则res这里需要res.default才能获取到属性或者方法了。
import('@/views/08_代码分包/utils/sum').then(res => {
  // console.log(res)
  console.log(res.sum(1,2))
})
import child from "./child";

export default {
  name: "App.vue",
  components: {
    child
  },
  created() {
    // console.log(sum(1, 2));
  }
}
</script>

<style scoped>

</style>