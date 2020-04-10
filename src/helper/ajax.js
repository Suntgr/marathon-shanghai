/** @format */

import axios from 'axios'
import $q from 'q'
import { $utils } from '@helper'
import md5 from 'blueimp-md5'
import { Message } from 'element-ui'
function requestHandle(params, userToken) {
  const lang = localStorage.getItem('lang') || 'zh-CN'
  const defer = $q.defer()
  const ts = parseInt(Date.now() / 1000)
  const signatureData = [
    { appid: '5PFuGr3Q7AA0vbJAFior' },
    { device_id: '123' },
    { channel: '' },
    { ts },
    { noncesr: ts },
    { language: lang },
    { version: '123' },
    { model: '' },
    { sys_version: '' }
  ]
  const data = params.method === 'post' ? params.data : params.params
  if (data instanceof FormData) {
    for (var key of data.keys()) {
      if (key === 'file') continue
      signatureData.push({ [key]: data.get(key) })
    }
  } else {
    for (const key in data) {
      signatureData.push({ [key]: data[key] })
    }
  }
  signatureData.sort((a, b) => {
    a = Object.keys(a)[0]
    b = Object.keys(b)[0]
    if (a < b) {
      return -1
    }
    if (a > b) {
      return 1
    }
    return 0
  })
  let headerData = {}
  const sign = signatureData.reduce((pre, cur) => {
    const key = Object.keys(cur)[0]
    headerData = { ...headerData, ...cur }
    return pre ? `${pre}&${key}=${cur[key]}` : `${key}=${cur[key]}`
  }, '')
  const WebappSecret = 'xbbaUe8PPVblLWaVP-iIJnUGhnDXmrm_'
  let Authorization
  if (userToken) {
    Authorization = 'JwtUser ' + sessionStorage.getItem('token')
  } else {
    Authorization =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.MmwTuGPzzXKkDFQOX9Gn-Av9YO9J_4Q7LXeXr23js20'
  }
  const headers = {
    'Marathon-App-Id': '5PFuGr3Q7AA0vbJAFior',
    'Marathon-Device-Id': '123',
    'Marathon-Ts': ts,
    'Marathon-Noncesr': ts,
    'Marathon-Language': lang,
    'Marathon-Sign': md5(sign + WebappSecret),
    'Marathon-Version': '123',
    'Marathon-Model': '',
    'Marathon-Sys-Version': '',
    Authorization
  }
  if (params.headers) {
    params.headers = { ...params.headers, ...headers }
  } else {
    params.headers = headers
  }
  axios(params)
    .then(res => {
      if (res && (res.unauthorized || res.statusCode === 401)) {
        window.location.href = '/login'
      }
      if (res.type === 'application/x-msdownload') {
        redirectToIframe(res.request.responseURL)
      } else if (res.data) {
        if (res.data.code === 0) {
          if (res.data.new_user_token) {
            sessionStorage.setItem('token', res.data.new_user_token)
          }
          defer.resolve(res.data)
        } else {
          console.log(res.data)
          Message({
            message: res.data.msg,
            type: 'error'
          })
          defer.reject(res.data)
        }
      } else {
        defer.reject()
      }
    })
    .catch(err => {
      defer.reject(err)
    })

  return defer.promise
}

function redirectToIframe(url) {
  const iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  iframe.src = url
  iframe.onload = function() {
    document.body.removeChild(iframe)
  }
  document.body.appendChild(iframe)
}

export default {
  post: function(url, params = {}, userToken) {
    return requestHandle(
      {
        method: 'post',
        url: url,
        data: params
      },
      userToken
    )
  },
  get: function(url, params, userToken) {
    return requestHandle(
      {
        method: 'get',
        url,
        params
      },
      userToken
    )
  },
  uploadfile: function(url, params, userToken) {
    const formData = new FormData()
    for (const key in params) {
      formData.append(key, params[key])
    }
    return requestHandle(
      {
        method: 'post',
        url,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      },
      userToken
    )
  }
}
