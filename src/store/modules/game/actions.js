/** @format */
import { $apis } from '@helper'
export default {
  getActivityList({ commit }) {
    return new Promise((resolve, reject) => {
      $apis.game
        .getActivityList()
        .then(({ data }) => {
          resolve(data)
          commit('SET_ACTIVETYLIST', data)
        })
        .catch(err => reject(err))
    })
  },
  getApplyList({ commit }) {
    return new Promise((resolve, reject) => {
      $apis.game
        .getApplyList({
          page: 1,
          page_size: 100
        })
        .then(({ data }) => {
          resolve(data)
          commit('SET_APPLYLIST', data)
        })
        .catch(err => reject(err))
    })
  },
  getCertificate({ commit }) {
    return new Promise((resolve, reject) => {
      $apis.game
        .getCertificate()
        .then(({ data }) => {
          resolve(data)
          commit('SET_CERT', data.list)
        })
        .catch(err => reject(err))
    })
  },
  getApplyDetails({ commit }, config) {
    return new Promise((resolve, reject) => {
      $apis.game
        .getApplyDetails(config)
        .then(({ data }) => {
          resolve(data)
          commit('SET_APPLYDETAILS', data)
        })
        .catch(err => reject(err))
    })
  },
  getPhoto({ commit, state }) {
    if (state.photo.length) return
    return new Promise((resolve, reject) => {
      $apis.game
        .getPhoto()
        .then(({ data }) => {
          resolve(data)
          commit('SET_PHOTO', data.list)
        })
        .catch(err => reject(err))
    })
  }
}
