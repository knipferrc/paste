import RegisterForm from './RegisterForm'
import RegisterMutation from '../../mutations/register'
import { graphql } from 'react-apollo'

const withRegister = graphql(RegisterMutation, {
  props: ({ mutate }) => ({
    register: (firstName, lastName, email, password) =>
      mutate({ variables: { firstName, lastName, email, password } })
  })
})

export default withRegister(RegisterForm)
