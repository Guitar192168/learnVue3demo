import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import demo from '../components/demo.vue'
import demo2 from '../components/demo2.vue'

Vue.use(VueRouter)

// 配置路由映射
const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'demo',
        name: demo,
        component: demo,
        children: [
          {
            path: 'demo2',
            name: demo2,
            component: demo2,
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  }
]

// 创建路由对象router
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
