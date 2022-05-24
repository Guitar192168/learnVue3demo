import Vue from 'vue'
// import App from './App.vue'
// import App from './views/01_基础/01_[]的v-bind动态属性写法'
// import App from './views/01_基础/02_vm.$watch和主动停止'
// import App from './views/01_基础/03_动态class'
// import App from './views/01_基础/04_key在v-if中的作用'
// import App from './views/01_基础/05_v-show不支持template元素'
// import App from './views/01_基础/06_forIn和forOf在v-for里面的效果'
// import App from './views/01_基础/07_vue2对数组的7个方法进行了双向绑定的处理'
// import App from './views/01_基础/08_is与ul和li标签解析DOM模板时的注意事项'
// import App from './views/02_vue2双向绑定/App'
// import App from './views/03_vue2组件的v-model/App'
// import App from './views/04_vue2组件的v-model之非输入框/App'
// import App from './views/05_将原生事件绑定到组件上/App'
// import App from './views/05_native将原生事件绑定到组件上/App'
// import App from './views/06_先测试一下直接修改prop的值会不会影响到父级/App'
// import App from './views/07_sync修饰符/App'

// import App from './views/09_插槽和作用域插槽/App'
// import App from './views/09_插槽和作用域插槽/todoList'

// import App from './views/10_动态组件监听emit/App'

// import App from './views/12_处理边界情况/01_$root'


// import App from './views/13_ref/App'
// import App from './views/14_$once程序化的事件侦听器/App'
// import App from './views/15_vue过渡/App'
// import App from './views/16_vue动画/App'
import App from './views/17_vue2自定义指令/App'

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
