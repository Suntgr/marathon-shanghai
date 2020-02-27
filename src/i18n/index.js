import Vue from 'vue'
import Element from 'element-ui'
import VueI18n from 'vue-i18n'
import messages from './langs'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'cn',
  messages
})
Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
})
export default i18n
