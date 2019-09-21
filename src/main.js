import Vue from 'vue'
import App from './App.vue'
import VueResourece from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResourece)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
