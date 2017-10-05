import { gql } from 'react-apollo'

export default gql`
  mutation addPaste(
    $title: String
    $category: String
    $description: String
    $content: String
    $userId: String
    $status: String
  ) {
    addPaste(
      title: $title
      category: $category
      description: $description
      content: $content
      userId: $userId
      status: $status
    ) {
      __typename
      _id
      title
      category
      description
      content
      createdBy
      status
    }
  }
`
