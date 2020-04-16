/** @format */

import Vue from 'vue'
import Cookies from 'js-cookie'
import Filters from './filters'

/* ------------------------Vue Global Config------------------------------ */
Vue.config.productionTip = false

const lang = Cookies.get('lang') || 'en'
Vue.config.lang = lang

/* ------------------------Vue Global Variable------------------------------ */
import { $apis, $utils, $document, $auth, $lodash } from '@helper'
Vue.prototype.$_ = $lodash
Vue.prototype.$apis = $apis
Vue.prototype.$utils = $utils
Vue.prototype.$auth = $auth
Vue.prototype.$document = $document

for (const key in Filters) {
  Vue.filter(key, Filters[key])
}

/* ------------------------Vue Global Components------------------------------ */
// import ElementUI from 'element-ui'
// import locale from 'element-ui/lib/locale/lang/en'
// Vue.use(ElementUI, { locale })

import Markdown from '@components/markdown/Index'
Vue.component('Markdown', Markdown)

import MarkdownPreview from '@components/markdown/MarkdownPreview'
Vue.component('MarkdownPreview', MarkdownPreview)

import VueMeta from 'vue-meta'
Vue.use(VueMeta)

import Icon from '@components/Icon'
Vue.component('icon', Icon)

import Arrow from '@components/icons/Arrow'
Vue.component('arrow', Arrow)

//全局注册自定义指令，用于判断当前图片是否能够加载成功，可以加载成功则赋值为img的src属性，否则使用默认图片
Vue.directive('real-img', async function(el, binding) {
  //指令名称为：real-img
  let imgURL = binding.value //获取图片地址
  if (imgURL) {
    let exist = await imageIsExist(imgURL)
    if (exist) {
      el.setAttribute('src', imgURL)
    }
  }
})

/**
 * 检测图片是否存在
 * @param url
 */
let imageIsExist = function(url) {
  return new Promise(resolve => {
    var img = new Image()
    img.onload = function() {
      if (this.complete == true) {
        resolve(true)
        img = null
      }
    }
    img.onerror = function() {
      resolve(false)
      img = null
    }
    img.src = url
  })
}
