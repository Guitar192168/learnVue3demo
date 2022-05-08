import {
  createApp
} from 'vue';
import format from './02_自定义指令/format.js';

// import App from './01_mixin和extends/App'
// import App from './00_demo/01_App.vue'
// import App from './01_App.vue';
// import App from './001_组件的v-model/01_App.vue';
// import App from './01_setup的两个参数/Father';
// import App from './01_setup的两个参数/01_App.vue';
// import App from './02_reactive和ref/01_App.vue'
// import App from './02_reactive和ref/02_toRefs和toRef.vue'
// import App from './02_reactive和ref/03_浅层解包.vue'
// import App from './02_reactive和ref/04_shallowRef和triggerRef.vue'
// import App from './02_reactive和ref/05_unref.vue'
// import App from './02_reactive和ref/06_customRef.vue'
// import App from './02_reactive和ref/07_ref获取其他组件.vue'
// import App from './02_reactive和ref/测试新的ref与reactive的关系.vue'
// import App from './02_自定义指令/01_App.vue'
// import App from './02_自定义指令/自定义format指令.vue'
// import App from './03_其他ref的api的补充/01_App.vue'
// import App from './03_其他ref的api的补充/01_shallowRef浅层的ref对象.vue'
// import App from './03_其他ref的api的补充/02_shallowReadOnly.vue'
// import App from './04_computed和_watch/01_computed.vue'
// import App from './04_computed和_watch/02_watchEffect自动收集监听和如何停止.vue'
// import App from './04_computed和_watch/03_ref和watchEffect执行时机.vue'
// import App from './04_computed和_watch/04_watchEffect的副作用.vue'
// import App from './04_computed和_watch/05_watch.vue'
// import App from './04_computed和_watch/06_watch监听多个数据源.vue'
// import App from './04_computed和_watch/07_provide和inject的vue写法.vue'
// import App from './05_生命周期钩子/App'
import App from './06_CompositionAPI练习/App'
// import App from './08_尝试一下动态的css/App'
// import App from './07_h函数和render函数的使用/01_vue2和在setup使用h函数.vue'
// import App from './07_h函数和render函数的使用/02_h函数里导入子组件.vue'
// import App from './07_h函数和render函数的使用/001_render函数的基本使用'
// import App from './07_h函数和render函数的使用/002_render函数实现计数器'

const app = createApp(App)
// const app ={
//   mixin:function (){
//
//   }
// }

//类型是 ComponentOptions
// app.mixin({
//   data() {
//     return {
//       name: '全局混入的name'
//     }
//   },
//   created() {
//     // console.log('全局混入的created')
//   }
// })

format(app)

app.mount('#app');
