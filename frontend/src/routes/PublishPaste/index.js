import Loadable from 'react-loadable'
import PageLoader from 'components/PageLoader'

const LoadablePublishPaste = Loadable({
  loader: () => import('./components/PublishPasteView'),
  loading: PageLoader
})

export default LoadablePublishPaste
