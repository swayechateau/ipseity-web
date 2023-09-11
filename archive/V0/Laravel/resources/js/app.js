import Vue from 'vue'
import '@/plugins'
import App from '@/App.vue'
import store from '@/state/store'
import router from './router'
import Default from '@/router/layouts/Default'
import Admin from '@/router/layouts/Admin'

Vue.component('admin-layout', Admin)
Vue.component('default-layout', Default)

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = process.env.NODE_ENV === 'production'
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
