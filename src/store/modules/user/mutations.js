/** @format */

export default {
  ['GET_USER'](state, value) {
    state.user = value.user
    state.sosUser = value.sos_user
  }
}
