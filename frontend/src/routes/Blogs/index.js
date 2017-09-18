import Loadable from 'react-loadable'
import PageLoader from 'components/PageLoader'

const LoadableBlogs = Loadable({
  loader: () => import('./components/BlogsView'),
  loading: PageLoader
})

export default LoadableBlogs
