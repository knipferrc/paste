import Loadable from 'react-loadable'
import PageLoader from 'components/PageLoader'

const LoadablePasteDetails = Loadable({
  loader: () => import('./components/PasteDetailsView'),
  loading: PageLoader
})

export default LoadablePasteDetails
