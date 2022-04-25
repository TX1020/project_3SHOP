import { reqCategoryList } from '@/api/index.js'
const state = {
  categoryList: []
}
const actions = {
  // 通过api里面的接口函数调用发请求获取服务器的数据
  async categoryList({ commit }) {
    const result = await reqCategoryList()
    // console.log(result);
    if (result.code === 200) {
      commit('CATEGORYLIST', result.data)
    }
  }
}
const mutations = {
  CATEGORYLIST(state, categoryList) {
    // console.log(state.categoryList);
    // console.log(categoryList);
    state.categoryList = categoryList
    // categoryList = state.categoryList
  }
}
const getters = {}
export default {
  state,
  mutations,
  getters,
  actions
}
