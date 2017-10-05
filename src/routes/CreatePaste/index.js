import Loadable from 'react-loadable'
import PageLoader from 'components/PageLoader'

const LoadableCreatePaste = Loadable({
  loader: () => import('./components/CreatePasteView'),
  loading: PageLoader
})

export default LoadableCreatePaste
