import { reqCategoryList, reqbannerList, reqFloorList } from '@/api/index.js'
const state = {
  categoryList: [],
  getBannerList: [],
  getFloorList: []
}
const actions = {
  // 通过api里面的接口函数调用发请求获取服务器的数据
  async categoryList({ commit }) {
    let result = await reqCategoryList()
    console.log(result)
    if (result.code === 200) {
      commit('CATEGORYLIST', result.data)
    }
  },
  // 获取首页轮播图的数据
  async getBannerList({ commit }) {
    const result = await reqbannerList()
    // console.log(result)
    if (result.code === 200) {
      commit('GETBANNERLIST', result.data)
    }
  },
  async getFloorList({ commit }) {
    let result = await reqFloorList()
    // console.log(result)
    if (result.code === 200) {
      commit('GETFLOORLIST', result.data)
    }
  }
}
const mutations = {
  CATEGORYLIST(state, categoryList) {
    // console.log(state.categoryList);
    // console.log(categoryList);
    state.categoryList = categoryList
    // categoryList = state.categoryList
  },
  GETBANNERLIST(state, getBannerList) {
    // console.log(getBannerList);
    state.getBannerList = getBannerList
  },
  GETFLOORLIST(state, getFloorList) {
    state.getFloorList = getFloorList
  }
}
const getters = {}
export default {
  state,
  mutations,
  getters,
  actions
}
