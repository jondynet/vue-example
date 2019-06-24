import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import http from './plugins/http'

Vue.prototype.$http = http

Vue.config.productionTip = false

window.$vm = new Vue({
  render: h => h(App),
  router
}).$mount('#app')
