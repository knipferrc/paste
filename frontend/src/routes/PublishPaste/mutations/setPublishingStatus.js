import { gql } from 'react-apollo'

export default gql`
  mutation setPublishingStatus($pasteId: ID!, $status: String!) {
    setPublishingStatus(pasteId: $pasteId, status: $status) {
      status
    }
  }
`
