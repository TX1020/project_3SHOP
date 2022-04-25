import request from '@/api/request'
// import { get } from 'core-js/core/dict'
// 三级联动接口
export const reqCategoryList = () => {
  return request({ url: '/product/getBaseCategoryList', method: 'get' })
}
