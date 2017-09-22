import { gql } from 'react-apollo'

export default gql`
  mutation addBlog(
    $title: String
    $category: String
    $description: String
    $content: String
    $userId: String
  ) {
    addBlog(
      title: $title
      category: $category
      description: $description
      content: $content
      userId: $userId
    ) {
      title
    }
  }
`
