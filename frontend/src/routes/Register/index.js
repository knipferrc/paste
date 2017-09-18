import Loadable from 'react-loadable'
import PageLoader from 'components/PageLoader'

const LoadableRegister = Loadable({
  loader: () => import('./components/RegisterView'),
  loading: PageLoader
})

export default LoadableRegister
