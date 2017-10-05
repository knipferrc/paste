import Loadable from 'react-loadable'
import PageLoader from 'components/PageLoader'

const LoadableHome = Loadable({
  loader: () => import('./components/HomeView'),
  loading: PageLoader
})

export default LoadableHome
