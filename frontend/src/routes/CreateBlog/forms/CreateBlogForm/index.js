import AddBlogMutation from '../../mutations/addBlog'
import CreateBlogForm from './CreateBlogForm'
import { graphql } from 'react-apollo'

const withAddBlog = graphql(AddBlogMutation, {
  props: ({ mutate }) => ({
    addBlog: (title, category, description, content, userId) =>
      mutate({ variables: { title, category, description, content, userId } })
  })
})

export default withAddBlog(CreateBlogForm)
