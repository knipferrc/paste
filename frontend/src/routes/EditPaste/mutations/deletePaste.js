import { gql } from 'react-apollo'

export default gql`
  mutation deletePaste($pasteId: ID!) {
    deletePaste(pasteId: $pasteId) {
      _id
    }
  }
`
