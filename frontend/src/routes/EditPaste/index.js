import Loadable from 'react-loadable'
import PageLoader from 'components/PageLoader'

const LoadableEditPaste = Loadable({
  loader: () => import('./components/EditPasteView'),
  loading: PageLoader
})

export default LoadableEditPaste
