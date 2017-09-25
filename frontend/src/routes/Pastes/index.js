import Loadable from 'react-loadable'
import PageLoader from 'components/PageLoader'

const LoadablePastes = Loadable({
  loader: () => import('./components/PastesView'),
  loading: PageLoader
})

export default LoadablePastes
