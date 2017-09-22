import Loadable from 'react-loadable'
import PageLoader from 'components/PageLoader'
import { graphql } from 'react-apollo'
import AddBlogMutation from './mutations/addBlog'

const withAddBlog = graphql(AddBlogMutation, {
  props: ({ mutate }) => ({
    addBlog: (title, category, description, content, userId) =>
      mutate({ variables: { title, category, description, content, userId } })
  })
})

const LoadableCreateBlog = Loadable({
  loader: () => import('./components/CreateBlogView'),
  loading: PageLoader
})

export default withAddBlog(LoadableCreateBlog)
