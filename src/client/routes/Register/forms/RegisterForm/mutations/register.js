import { gql } from 'react-apollo'

export default gql`
  mutation register(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    register(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    )
  }
`
