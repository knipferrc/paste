import Loadable from 'react-loadable'
import PageLoader from 'components/PageLoader'
import LoginMutation from './mutations/login'
import { graphql } from 'react-apollo'

const withLogin = graphql(LoginMutation, {
  props: ({ mutate }) => ({
    login: (email, password) => mutate({ variables: { email, password } })
  })
})

const LoadableLogin = Loadable({
  loader: () => import('./components/LoginView'),
  loading: PageLoader
})

export default withLogin(LoadableLogin)
