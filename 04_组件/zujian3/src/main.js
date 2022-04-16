import { createApp } from 'vue'
// import App from '../src/views/01_css作用域/App.vue'
// import App from '../src/views/02_父传子props和$attrs/App'
// import App from '../src/views/03_子传父的vue3写法/App'
// import App from '../src/views/05_插槽/App'
import App from '../src/views/06_作用域插槽/App'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
