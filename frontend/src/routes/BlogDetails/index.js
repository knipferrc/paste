import Loadable from 'react-loadable'
import PageLoader from 'components/PageLoader'

const LoadableBlogDetails = Loadable({
  loader: () => import('./components/BlogDetailsView'),
  loading: PageLoader
})

export default LoadableBlogDetails
