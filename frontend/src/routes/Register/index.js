import Loadable from 'react-loadable'
import PageLoader from 'components/PageLoader'
import { graphql } from 'react-apollo'
import RegisterMutation from './mutations/register'

const withRegister = graphql(RegisterMutation, {
  props: ({ mutate }) => ({
    register: (firstName, lastName, email, password) =>
      mutate({ variables: { firstName, lastName, email, password } })
  })
})

const LoadableRegister = Loadable({
  loader: () => import('./components/RegisterView'),
  loading: PageLoader
})

export default withRegister(LoadableRegister)
