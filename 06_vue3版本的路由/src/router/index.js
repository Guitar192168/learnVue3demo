// createWebHistory   createWebHashHistory
import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'


// 配置映射对象
const routes = [
    {
        path: '/',
        // reLaunch:'/home',  // 错误写法
        redirect:'/home', // 重定向到  '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

// 创建路由对象router
const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router
