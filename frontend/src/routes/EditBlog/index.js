import Loadable from 'react-loadable'
import PageLoader from 'components/PageLoader'

const LoadableEditBlog = Loadable({
  loader: () => import('./components/EditBlogView'),
  loading: PageLoader
})

export default LoadableEditBlog
