import { gql } from 'react-apollo'

export default gql`
  query pasteContent($pasteId: ID!) {
    pasteContent(pasteId: $pasteId)
  }
`
