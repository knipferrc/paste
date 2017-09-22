import { gql, graphql } from 'react-apollo'

import AddBlogMutation from '../../mutations/addBlog'
import CreateBlogForm from './CreateBlogForm'

const MyBlogsQuery = gql`
  query myBlogs($userId: ID!) {
    myBlogs(userId: $userId) {
      title
      description
      category
      status
      _id
    }
  }
`

const withAddBlog = graphql(AddBlogMutation, {
  props: ({ mutate }) => ({
    addBlog: (title, category, description, content, userId) => {
      return mutate({
        variables: { title, category, description, content, userId },
        optimisticResponse: {
          __typename: 'Mutation',
          addBlog: {
            __typename: 'Blog',
            title,
            category,
            description,
            content,
            userId
          }
        }
      })
    }
  }),
  options: props => ({
    refetchQueries: [
      {
        query: MyBlogsQuery,
        variables: { userId: props.user._id }
      }
    ]
  })
})

export default withAddBlog(CreateBlogForm)
