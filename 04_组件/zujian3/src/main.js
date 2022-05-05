import { createApp } from 'vue'
// import App from '../src/views/01_css作用域/App.vue'
// import App from '../src/views/02_父传子props和$attrs/App'
// import App from '../src/views/03_子传父的vue3写法/App'
// import App from '../src/views/05_插槽/App'
// import App from '../src/views/06_作用域插槽/App'
// import App from '../src/views/07_动态组件/App'
// import App from '../src/views/08_代码分包/App'
// import App from '../src/views/09_异步组件/App'
// import App from '../src/views/10_官方: 模板引用ref--引用元素和组件refs,$root,$parent/App'
// import App from '../src/views/11_组件的v-model/App'
// import App from '../src/views/12_组件的v-model/App'
// import App from '../src/views/13_动态插槽/App'
// import App from './Pagination'
// import App from '../src/views/13_动态插槽/App'
// import App from '../src/views/14_css和模板对于图片的处理/App'
import App from '../src/views/15_父子组件/App'
import router from './router'
import store from './store'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

createApp(App).use(store).use(router).mount('#app')
