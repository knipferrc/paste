import Loadable from 'react-loadable'
import PageLoader from 'components/PageLoader'

const LoadableCreateBlog = Loadable({
  loader: () => import('./components/CreateBlogView'),
  loading: PageLoader
})

export default LoadableCreateBlog
