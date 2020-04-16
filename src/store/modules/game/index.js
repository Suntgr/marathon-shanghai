/** @format */

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  activityId: '',
  entryType: '',
  applyList: null,
  cert: null,
  applyDetails: null,
  photo: [],
  activedPhoto: 0,
  activityList: {},
  maxChildrenNumber: 0,
  parentChildId: ''
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
