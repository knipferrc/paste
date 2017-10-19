import HomeRoute from './Home'
import LoginRoute from './Login'

const routes = [
  {
    path: '/',
    exact: true,
    component: HomeRoute
  },
  {
    path: '/login',
    exact: true,
    component: LoginRoute
  }
]

export default routes
