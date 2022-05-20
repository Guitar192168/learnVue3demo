import Vue from 'vue'
// import App from './App.vue'
// import App from './views/01_动态参数另一种写法/01_[]的v-bind动态属性写法'
// import App from './views/01_动态参数另一种写法/02_vm.$watch和主动停止'
// import App from './views/01_动态参数另一种写法/03_动态class'
// import App from './views/01_动态参数另一种写法/04_key在v-if中的作用'
// import App from './views/01_动态参数另一种写法/05_v-show不支持template元素'
// import App from './views/01_动态参数另一种写法/06_forIn和forOf在v-for里面的效果'
// import App from './views/01_动态参数另一种写法/07_vue2对数组的7个方法进行了双向绑定的处理'
import App from './views/01_动态参数另一种写法/08_is与ul和li标签解析DOM模板时的注意事项'

import router from './router'
import store from './store'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
// Vue.use(ElementUI);

new Vue({
    router,
    store,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')
