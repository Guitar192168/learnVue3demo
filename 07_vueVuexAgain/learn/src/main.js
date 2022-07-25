import { createApp } from 'vue'
import App from './App.vue'
// import App from './views/01_mapState_computed'
import vuex from '../store'

createApp(App).use(vuex).mount('#app')
