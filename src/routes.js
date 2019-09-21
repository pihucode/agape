import Welcome from './components/Welcome'
import Home from './components/Home'
import Featured from './components/Featured'
import MyPet from './components/MyPet'
import Merch from './components/Merch'

export default [
  { path: '/', component: Welcome },
  { path: '/home', component: Home },
  { path: '/featured', component: Featured },
  { path: '/mypet', component: MyPet },
  { path: '/merch', component: Merch },
]
