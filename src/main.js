import Vue from 'vue'
import App from './App.vue'
import VueResourece from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import BootstrapVue from 'bootstrap-vue'

Vue.use(VueResourece)
Vue.use(VueRouter)
Vue.use(BootstrapVue)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
