import { gql } from 'react-apollo'

export default gql`
  mutation publishBlog($blogId: ID!) {
    publishBlog(blogId: $blogId) {
      title
    }
  }
`
