/** @format */
import { $apis } from '@helper'
export default {
  getUser({ commit }) {
    return new Promise((resolve, reject) => {
      $apis.user
        .getUser()
        .then(({ data }) => {
          commit('GET_USER', data)
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
