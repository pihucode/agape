import HelloWorld from './components/HelloWorld'
import Featured from './components/Featured.vue'
import Signup from './components/Signup.vue'

export default [
  { path: '/', component: HelloWorld },
  { path: '/featured', component: Featured },
  { path: '/signup', component: Signup },
]