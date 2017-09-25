import { gql } from 'react-apollo'

export default gql`
  mutation publishPaste($pasteId: ID!) {
    publishPaste(pasteId: $pasteId) {
      title
    }
  }
`
