import Home from './Home'
import Login from './Login'
import Register from './Register'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/register',
    exact: true,
    component: Register
  },
  {
    path: '/login',
    exact: true,
    component: Login
  }
]

export default routes
