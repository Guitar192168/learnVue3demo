import Vue from 'vue'
// import App from './App.vue'
// import App from './views/01_动态参数另一种写法/01_[]的v-bind动态属性写法'
// import App from './views/01_动态参数另一种写法/02_vm.$watch和主动停止'
import App from './views/01_动态参数另一种写法/03_动态class'

import router from './router'
import store from './store'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
// Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
