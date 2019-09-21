import Welcome from './components/Welcome'
import Featured from './components/Featured'
import MyPets from './components/MyPets'

export default [
  { path: '/', component: Welcome },
  { path: '/featured', component: Featured },
  { path: '/mypets', component: MyPets },
]