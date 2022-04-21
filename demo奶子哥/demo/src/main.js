import {createApp} from 'vue'
import App from './App.vue'
// import App from './Pagination'
import router from './router'
import store from './store'
import loading from "./loading.js";

createApp(App).use(store).use(router).mount('#app')
