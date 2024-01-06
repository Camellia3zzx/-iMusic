import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import search from './modules/search'
import ranklist from './modules/ranlist'
Vue.use(Vuex)

export default new Vuex.Store({

  state: {
  },
  getters: {
    token (state) {
      return state.user.userInfo.token
    }

  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    search,
    ranklist
  }
})
