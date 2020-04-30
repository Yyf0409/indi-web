import Vue from 'vue'
import App from './App.vue'
import router_dir from 'router/router.js'

Vue.config.productionTip = false

new Vue({
  router_dir,
  render: h => h(App)
}).$mount('#app')
