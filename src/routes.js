import Welcome from './components/Welcome'
import Featured from './components/Featured'
import Signin from './components/Signin'
import MyPets from './components/MyPets'

export default [
  { path: '/', component: Welcome },
  { path: '/featured', component: Featured },
  { path: '/signin', component: Signin },
  { path: '/mypets', component: MyPets },
]