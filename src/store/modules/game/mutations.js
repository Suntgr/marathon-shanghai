/** @format */

export default {
  ['SET_ENTRYTYPE'](state, value) {
    state.entryType = value
  },
  ['SET_APPLYLIST'](state, value) {
    state.applyList = value
  },
  ['SET_CERT'](state, value) {
    state.cert = value
  },
  ['SET_APPLYDETAILS'](state, value) {
    state.applyDetails = value
  },
  ['SET_PHOTO'](state, value) {
    state.photo = value
  },
  ['SET_ACTIVEDPHOTO'](state, value) {
    state.activedPhoto = value
  },
  ['SET_ACTIVETYLIST'](state, value) {
    state.activetyList = value
  },
  ['SET_MAXNUMBER'](state, value) {
    state.maxChildrenNumber = value
  },
  ['SET_PARENTCHILDID'](state, value) {
    state.parentChildId = value
  },
  ['SET_ACTIVITYID'](state, value) {
    state.activityId = value
  }
}
