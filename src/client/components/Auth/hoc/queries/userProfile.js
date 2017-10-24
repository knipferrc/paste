import { gql } from 'react-apollo'

export default gql`
  query userProfile($accessToken: String!) {
    userProfile(accessToken: $accessToken) {
      id
      email
      firstName
      lastName
    }
  }
`
