/*
 * @Author: your name
 * @Date: 2021-10-05 11:22:30
 * @LastEditTime: 2021-10-05 17:28:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Vue3/03_webpack/02_webpack_css/src/index.js
 */
// import './element.js'
import {
    createApp
} from 'vue/dist/vue.esm-bundler.js';
import App from './App.vue';
// } from 'vue';
// const a = [1, 2, 3, 4, 5]
// const message = a.map(item => item)
// const message2 = a.map(item => item)
console.log('打印');

// const app = createApp({
//     // template: '<h2>我是vue，通过webpack和babel来打包和解析</h2>'
// });
const app = createApp(App)

app.mount("#app");