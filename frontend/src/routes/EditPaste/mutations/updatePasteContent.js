import { gql } from 'react-apollo'

export default gql`
  mutation updatePasteContent($pasteId: String!, $pasteContent: String!) {
    updatePasteContent(pasteId: $pasteId, pasteContent: $pasteContent) {
      _id
      __typename
      content
    }
  }
`
