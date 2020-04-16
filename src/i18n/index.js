import Vue from 'vue'
import Element from 'element-ui'
import VueI18n from 'vue-i18n'
import messages from './langs'

Vue.use(VueI18n)
let locale = 'zh-CN'
if (localStorage.getItem('lang')) {
  locale = localStorage.getItem('lang')
} else {
  localStorage.setItem('lang', locale)
}
const i18n = new VueI18n({ locale, messages })
Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
})
export default i18n
