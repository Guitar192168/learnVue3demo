import {
  createApp
} from 'vue';
import format from './02_自定义指令/format.js';
// import {
//   foo
// } from './demo.ts'
// console.log(foo(1, 2));

// import App from './00_demo/01_App.vue'

// import App from './01_App.vue';

// import App from './001_组件的v-model/01_App.vue';

// import App from './01_setup的两个参数/01_App.vue';
// import App from './02_reactive和ref/01_App.vue'
// import App from './02_reactive和ref/测试新的ref与reactive的关系.vue'
// import App from './02_自定义指令/01_App.vue'
import App from './02_自定义指令/自定义format指令.vue'
// import App from './03_其他ref的api的补充/01_App.vue'
// import App from './03_其他ref的api的补充/01_shallowRef浅层的ref对象.vue'
// import App from './03_其他ref的api的补充/02_shallowReadOnly.vue'
// import App from './04_computed和_watch/01_computed.vue'
// import App from './04_computed和_watch/02_watchEffect自动收集监听和如何停止.vue'
// import App from './04_computed和_watch/03_ref和watchEffect执行时机.vue'
// import App from './04_computed和_watch/05_watch.vue'
// import App from './04_computed和_watch/06_watch监听多个数据源.vue'



// import App from './07_h函数和render函数的使用/01_vue2和在setup使用h函数.vue'
// import App from './07_h函数和render函数的使用/02_h函数里导入子组件.vue'
const app = createApp(App)

format(app)

app.mount('#app');