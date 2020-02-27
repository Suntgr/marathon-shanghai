/** @format */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './global.js'
import 'normalize.css'
import i18n from './i18n/index.js'
import './registerServiceWorker'

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
