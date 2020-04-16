import $ajax from '../ajax'
import $utils from '../utils'

const serverUrl = $utils.serverUrl

export default {
  getActivityList(data) {
    return $ajax.get('api/v1/activity/list', data)
  },
  getRule(data) {
    return $ajax.get('api/v1/content/rule/detail', data)
  },
  getActivity(data) {
    return $ajax.get('api/v1/activity/detail', data)
  },
  applyValidate(data) {
    return $ajax.post('api/v1/sign-up/validate', data, 'userToken')
  },
  getChildrenList(data) {
    return $ajax.post('api/v1/user/child-list', data, 'userToken')
  },
  applyGame(data) {
    return $ajax.post('api/v1/sign-up/create', data, 'userToken')
  },
  confirmGame(data) {
    return $ajax.post('api/v1/sign-up/confirm', data, 'userToken')
  },
  uploadElecSign(data) {
    return $ajax.uploadfile('api/v1/sign-up/upload-elec-sign', data, 'userToken')
  },
  getApplyList(data) {
    return $ajax.get('api/v1/user/sign-up/list', data, 'userToken')
  },
  getCertificate(data) {
    return $ajax.get('api/v1/user/certificate/list', data, 'userToken')
  },
  getApplyDetails(data) {
    return $ajax.get('api/v1/user/sign-up/detail', data, 'userToken')
  },
  getScoreList(data) {
    return $ajax.get('api/v1/user/score/list', data, 'userToken')
  },
  getScoreDetails(data) {
    return $ajax.get('api/v1/user/score/detail', data, 'userToken')
  },
  getPhoto(data) {
    return $ajax.get('api/v1/user/photos/list', data, 'userToken')
  }
}
