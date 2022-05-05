import { reqSearch } from '@/api/index'
const state = {
  searchList: {}
}
const actions = {
  // 上下文的context中解构commit
  async getSearchList({ commit }, params = {}) {
    // params 形参是当用户派发action的时候，第二个参数传进来的，至少是个空对象
    let result = await reqSearch()
    console.log(result)
    if (result.code === 200) {
      commit('GETSEARCHLIST', result.data)
    }
  }
}
const mutations = {
  GETSEARCHLIST (state, searchList) {
    state.searchList = searchList
  }
}
// 项目中getters的作用简化仓库中的数据
const getters = {
  goodsList(){
    return state.searchList.goodsList||[]
  },
  attrsList(){
    return state.searchList.attrsList||[]
  },
  trademarkList(){
    return state.searchList.trademarkList||[]
  }
}
export default {
  state,
  actions,
  mutations,
  getters
}
