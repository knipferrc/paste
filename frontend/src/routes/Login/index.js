import Loadable from 'react-loadable'
import PageLoader from 'components/PageLoader'

const LoadableLogin = Loadable({
  loader: () => import('./components/LoginView'),
  loading: PageLoader
})

export default LoadableLogin
