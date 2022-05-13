import {
  createApp
} from 'vue';
import format from './08_自定义指令/format.js';
import {registerDirective} from "@/08_自定义指令/directives";

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
// import App from './08_自定义指令/01_App.vue'
// import App from './08_自定义指令/自定义format指令.vue'
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
// import App from './06_CompositionAPI练习/App'
// import App from './07_h函数和render函数的使用/01_vue2和在setup使用h函数.vue'
// import App from './07_h函数和render函数的使用/02_h函数里导入子组件.vue'
// import App from './07_h函数和render函数的使用/001_render函数的基本使用'
// import App from './07_h函数和render函数的使用/002_render函数实现计数器'

// import App from './07_render函数和h函数的使用/01_render函数的基本使用'
// import App from './07_render函数和h函数的使用/02_render函数使用子组件'
// import App from './07_render函数和h函数的使用/03_JSX的使用'
// import App from './07_render函数和h函数的使用/04_optionsAPI的JSX写法'
// import App from './07_render函数和h函数的使用/05_JSX的插槽'

// import App from './08_自定义指令/01_最基本的focus'
// import App from './08_自定义指令/02_最基本的focus之setup语法糖写法'
// import App from './08_自定义指令/03_局部指令'
// import App from './08_自定义指令/04_组件的生命周期'
// import App from './08_自定义指令/05_指令的参数和修饰符'
// import App from './08_自定义指令/06_自定义时间戳转换'

// import App from './10_插件use/App'

import App from './wx/App'



import pluginsObject from './10_插件use/plugins/pluginObject'
import pluginFunction from './10_插件use/plugins/pluginFunction'

// import App from './08_尝试一下动态的css/App'
const app = createApp(App)

// 通过对象形式注册的插件
app.use(pluginsObject)
// 通过function形式注册的插件
app.use(pluginFunction)
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

registerDirective(app)
// app.directive('focus', {
//   mounted(el) {
//     console.log(el, '全局的el')
//     el.focus()
//   }
// })

app.mount('#app');
