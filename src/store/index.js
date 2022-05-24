import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isFullScreen: false
  },
  mutations: {
    changeFullScreen (state, flag) {
      state.isFullScreen = flag
    }
  },
  actions: {
    setFullScreen ({ commit }, flag) {
      commit('changeFullScreen', flag)
    }
  },
  modules: {
  }
})
