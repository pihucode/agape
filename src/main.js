import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import BootstrapVue from 'bootstrap-vue'
// import GoogleAuth from 'vue-google-auth'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
// Vue.use(GoogleAuth, { clientID: '678587520258-a2ocgf9mblrtv6offpbotmcip6bf6v7f.apps.googleusercontent.com' })
// Vue.googleAuth().load()

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
