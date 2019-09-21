import Vue from 'vue'
import App from './App.vue'
import VueResourece from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import firebase from 'firebase'
import firebaseui from 'firebaseui';
import { config } from './firebaseConfig'

Vue.use(VueResourece)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  created() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$router.push("/featured");
      } else {
        this.$router.push("/signin");
      }
    });
  },
  render: h => h(App),
  router: router,
}).$mount('#app')
