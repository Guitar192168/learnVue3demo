// createWebHistory   createWebHashHistory
import {
    createRouter,
    createWebHistory,
    createWebHashHistory
} from 'vue-router'
// !!!! 如果要用魔法注释，!!这里不能用import来导入组件
// import Home from '../views/Home.vue'
// import About from "../views/About";


// 路由懒加载也可以这样写 然后赋值给home
// const home = () => import('../views/Home.vue')

// 配置映射对象
const routes = [{
        path: '/',
        // reLaunch:'/home',  // 错误写法
        redirect: '/home', // 重定向到  '/home'
    },
    {
        path: '/home',
        name: 'Home',
        // component: Home
        // component: () => import('../views/Home.vue')
        // 魔法注释    打包的就可以有名字了
        component: () => import( /* webpackChunkName:"Home" */ '../views/Home.vue'),
        // 自定义的属性
        meta: {
            name: 'yjq',
            age: 18
        }
    },
    {
        path: '/about',
        name: 'About',
        // component属性，可以接收一个函数，但是这个函数要求返回一个promise。  import('../').then(res => {console.log(res)})
        // component: About
        // component: () => import('../views/About.vue')
        component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

// 创建路由对象router
const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router