<template>
  <input type="text" v-plugin-focus>
</template>

<script>
import { getCurrentInstance } from "vue";
export default {
  name: "01_两种写法之对象写法",
  created() {
    console.log(this.name, '拿到通过插件注册的全局的name')
  },
  setup() {
    /**
     * 两种写法
     * 对象和函数
     * 对象的话，一定要有个install函数作为属性。到时候app.use()注册插件的时候，会调用这个install方法的
     *
     */
    console.log('vue3写法跟vue2。获取全局注册的属性，获取方式不同');
    const vm = getCurrentInstance()
    // console.log(vm.name, 'vm');
    console.log('vm', vm.name);
    console.log('vm.appContext', vm.appContext);
    console.log(vm.appContext.config.globalProperties.name);
  }
}
</script>

<style scoped>
</style>
