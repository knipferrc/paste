import { gql } from 'react-apollo'

export default gql`
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
