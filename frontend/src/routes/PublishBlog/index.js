import Loadable from 'react-loadable'
import PageLoader from 'components/PageLoader'

const LoadablePublishBlog = Loadable({
  loader: () => import('./components/PublishBlogView'),
  loading: PageLoader
})

export default LoadablePublishBlog
