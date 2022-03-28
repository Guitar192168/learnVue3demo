import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.config.errorHandler = (err, vm, info) => {
  console.log(err, 'err');
  console.log(vm, 'vm');
  console.log(info, 'info');
  debugger
}

new Vue({
  render: (h) => h(App),
}).$mount("#app");

// app.config.errorHandler = (err, vm, info) => {
//   // 处理错误
//   // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
// }