import { SET_FULL_SCREEN } from '@/store/mutations-type'

export default {
  setFullScreen ({ commit }, flag) {
    commit(SET_FULL_SCREEN, flag)
  }
}
