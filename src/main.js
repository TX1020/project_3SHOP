import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 三级联动组件
import TypeNav from '@/views/Home/TypeNav/TypeNav.vue'
import '@/mock/mockServer'
// 引入swiper样式
import 'swiper/css/swiper.css'
// 测试
// import { reqCategoryList } from '@/api/index'
// reqCategoryList()
Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav)
// reqCategoryList()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
