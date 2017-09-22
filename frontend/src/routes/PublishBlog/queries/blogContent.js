import { gql } from 'react-apollo'

export default gql`
  query blogContent($blogId: ID!) {
    blogContent(blogId: $blogId)
  }
`
