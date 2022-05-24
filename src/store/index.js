import Vue from 'vue'
import Vuex from 'vuex'
import state from '@/store/state'
import mutations from '@/store/mutations'
import actions from '@/store/actions'
import getters from '@/store/getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
  /*
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
  getters: {
    isFullScreen (state) {
      return state.isFullScreen
    }
  },
  modules: {
  } */
})
