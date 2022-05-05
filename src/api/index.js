import request from '@/api/request'
import mockrequest from '@/api/mockindex'
// 三级联动接口
export const reqCategoryList = () => {
  return request({ url: '/product/getBaseCategoryList', method: 'get' })
}
export const reqbannerList = () => {
  return mockrequest.get('/banner')
}
// 获取floor数组
export const reqFloorList = () => {
  return mockrequest.get('/floor')
}
// 获取search 数据
export const reqSearch = (params) => {
  return mockrequest({
    url: '/list',
    method: 'post',
    data: params
  })
}
