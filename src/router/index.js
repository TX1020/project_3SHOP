import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由组件
import Home from '@/views/Home/indexHome.vue'
import Search from '@/views/Search/indexSearch.vue'
import Login from '@/views/Login/indexLogin.vue'
import Register from '@/views/Register/indexRegister.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/home',
    component: Home,
    meta: { show: true }
  },
  {
    // 加上问号代表params可传可不传
    path: '/search/:keyWords?',
    component: Search,
    meta: { show: true },
    name: 'search'
  },
  {
    path: '/login',
    component: Login,
    meta: { show: false }
  },
  {
    path: '/register',
    component: Register,
    meta: { show: false }
  },
  // 重定向，项目跑起来的时候，访问/，立马让他定向到首页
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  routes
})

export default router
