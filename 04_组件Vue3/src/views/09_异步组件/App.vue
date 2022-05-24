<template>
  <!--  <child></child>-->
  <div>defineAsyncComponent接收两种类型的参数</div>
  <div>一种是工厂函数, 该函数需要返回一个promise对象</div>
  <div>一种是对象</div>
  <AsyncChild></AsyncChild>
  <br>
  <br>
  <br>
  <hr>
  <br>
  <div>通过传入</div>
  <AsyncChild22></AsyncChild22>

  <hr>
  <hr>
  <hr>
  <br>
  <h2>suspense标签</h2>
  <suspense>
    <template #default>
      <AsyncChild></AsyncChild>
    </template>
    <template #fallback>
      <loading></loading>
    </template>
  </suspense>
</template>

<script>
import {defineAsyncComponent} from 'vue'
//错误写法
// const AsyncChild = defineAsyncComponent(() => './child')
//defineAsyncComponent接收两种类型的参数
// 一种是工厂函数
// 一种是对象

import loading from "@/views/09_异步组件/loading";
import error from "@/views/09_异步组件/error";

const AsyncChild = defineAsyncComponent(() => import('./child'))
const AsyncChild22 = defineAsyncComponent({
  loader: () => import('./child'), //工厂函数
  loadingComponent: loading,//加载过程中的组件
  errorComponent: error, //加载失败时的组件
  delay: 1000,// 在显示loadingComponent组件之前的延迟
  timeout: 2000,
  suspensible: true,// 默认值，是否可挂起
  onError(error, retry, fail, attempts) {

  }
})


// import child from "./child";

export default {
  name: "App",
  components: {
    // child
    AsyncChild,
    AsyncChild22,
    loading
  }
}
</script>

<style scoped>

</style>