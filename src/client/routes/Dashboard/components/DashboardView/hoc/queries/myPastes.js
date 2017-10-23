import { gql } from 'react-apollo'

export default gql`
  query myPastes($userId: ID!) {
    myPastes(userId: $userId) {
      title
    }
  }
`
