import {
  createApp
} from 'vue';
import format from './02_自定义指令/format.js';

// import App from './00_demo/App.vue'

// import App from './App.vue';

// import App from './001_组件的v-model/App.vue';

// import App from './01_setup的两个参数/App.vue';
// import App from './02_reactive和ref/App.vue'
// import App from './02_reactive和ref/测试新的ref与reactive的关系.vue'
// import App from './02_自定义指令/App.vue'
// import App from './02_自定义指令/自定义format指令.vue'
// import App from './03_其他ref的api的补充/App.vue'
// import App from './03_其他ref的api的补充/01_shallowRef浅层的ref对象.vue'
// import App from './03_其他ref的api的补充/02_shallowReadOnly.vue'
// import App from './04_computed和_watch/01_computed.vue'
// import App from './04_computed和_watch/02_watchEffect.vue'
// import App from './04_computed和_watch/03_ref.vue'
// import App from './04_computed和_watch/04_watch.vue'
// import App from './04_computed和_watch/05_watch监听多个数据源.vue'
// import App from './07_尝试一下动态的css/App'
// import App from './05_h函数和render函数的使用/01_vue2和在setup使用h函数.vue'
// import App from './05_h函数和render函数的使用/02_h函数里导入子组件.vue'
// import App from './05_h函数和render函数的使用/001_render函数的基本使用'
import App from './05_h函数和render函数的使用/002_render函数实现计数器'

const app = createApp(App)

format(app)

app.mount('#app');
