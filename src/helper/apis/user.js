import $ajax from '../ajax'
import $utils from '../utils'

// const serverUrl = $utils.serverUrl

export default {
  login(data) {
    return $ajax.post('api/v1/user/login', data)
  },
  getCode(data) {
    return $ajax.post('api/v1/sms/send-code', data)
  },
  validateCode(data) {
    return $ajax.post('api/v1/sms/validate-code', data)
  },
  sign(data) {
    return $ajax.post('api/v1/user/register', data)
  },
  getCountries(data) {
    return $ajax.post('api/v1/area/list', data)
  },
  updateUserInfo(data) {
    return $ajax.post('api/v1/user/update', data, 'userToken')
  },
  updateOtherInfo(data) {
    return $ajax.post('api/v1/user/update-sos', data, 'userToken')
  },
  getUser(data) {
    return $ajax.post('api/v1/user/info', data, 'userToken')
  }
}
