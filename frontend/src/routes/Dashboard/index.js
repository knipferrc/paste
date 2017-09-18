import Loadable from 'react-loadable'
import PageLoader from 'components/PageLoader'

const LoadableDashboard = Loadable({
  loader: () => import('./components/DashboardView'),
  loading: PageLoader
})

export default LoadableDashboard
