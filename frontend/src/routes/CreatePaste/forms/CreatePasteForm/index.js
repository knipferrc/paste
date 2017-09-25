import { gql, graphql } from 'react-apollo'

import AddPasteMutation from '../../mutations/addPaste'
import CreatePasteForm from './CreatePasteForm'

const MyPastesQuery = gql`
  query myPastes($userId: ID!) {
    myPastes(userId: $userId) {
      title
      description
      category
      status
      _id
    }
  }
`

const withAddPaste = graphql(AddPasteMutation, {
  props: ({ mutate }) => ({
    addPaste: (title, category, description, content, userId) => {
      return mutate({
        variables: { title, category, description, content, userId },
        optimisticResponse: {
          __typename: 'Mutation',
          addPaste: {
            __typename: 'Paste',
            title,
            category,
            description,
            content,
            userId
          }
        }
      })
    }
  }),
  options: props => ({
    refetchQueries: [
      {
        query: MyPastesQuery,
        variables: { userId: props.user._id }
      }
    ]
  })
})

export default withAddPaste(CreatePasteForm)
