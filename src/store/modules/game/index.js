/** @format */

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  activityId: 1,
  entryType: '',
  applyList: null,
  cert: null,
  applyDetails: null,
  photo: [],
  activedPhoto: 0
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
