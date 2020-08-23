import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './assets/main.scss'

Vue.config.productionTip = false

import button from './components/button.vue'
import popup from './components/popup.vue'
import tab from './components/tab.vue'

Vue.component('vButton', button)
Vue.component('vPopup', popup)
Vue.component('vTab', tab)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
