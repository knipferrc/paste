import { gql } from 'react-apollo'

export default gql`
  mutation addPaste(
    $title: String
    $category: String
    $description: String
    $content: String
    $userId: String
  ) {
    addPaste(
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
