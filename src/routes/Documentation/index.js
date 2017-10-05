import Loadable from 'react-loadable'
import PageLoader from 'components/PageLoader'

const LoadableDocumentation = Loadable({
  loader: () => import('./components/DocumentationView'),
  loading: PageLoader
})

export default LoadableDocumentation
