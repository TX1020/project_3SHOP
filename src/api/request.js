// 对axios进行二次封装
import axios from 'axios'
import nprogress from 'nprogress' // 进度条使用 start进度条开始 done方法是进度条结束
// 引入进度条样式
import 'nprogress/nprogress.css'
// 利用axios的对象方法creat 去创建一个axios的实列
const request = axios.create({
  baseURL: '/api',
  // 超时时间
  timeout: 5000
})
// 请求拦截器：在发请求之前，请求拦截器可以检测到，到时候可以请求发出之前做一些事情
request.interceptors.request.use((config) => {
  // 进度条开始
  nprogress.start()
  return config
})
// 响应拦截器
request.interceptors.response.use((res) => {
  // 成功的回调函数：服务器响应数据回来以后，响应拦截器可以检测到，可以做一些事情
  // 进度条结束
  nprogress.done()
  return res.data
}, (Error) => {
  // 响应失败的回调函数
  return Promise.reject(new Error('faile'))
})
// 对外暴露
export default request
