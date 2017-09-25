import { gql, graphql } from 'react-apollo'

import AddPasteMutation from '../../mutations/addPaste'
import CreatePasteForm from './CreatePasteForm'

const MyPastesQuery = gql`
  query myPastes($userId: ID!) {
    myPastes(userId: $userId) {
      __typename
      _id
      title
      category
      description
      status
    }
  }
`

const withAddPaste = graphql(AddPasteMutation, {
  props: ({ mutate }) => ({
    addPaste: (title, category, description, content, userId, status) => {
      return mutate({
        variables: { title, category, description, content, userId, status },
        optimisticResponse: {
          __typename: 'Mutation',
          addPaste: {
            __typename: 'Paste',
            _id: Math.round(Math.random() * -1000000),
            title,
            category,
            description,
            content,
            createdBy: userId,
            status
          }
        },
        update: (store, { data: { addPaste } }) => {
          const data = store.readQuery({
            query: MyPastesQuery,
            variables: { userId }
          })
          data.myPastes.push(addPaste)
          store.writeQuery({ query: MyPastesQuery, data })
        }
      })
    }
  }),
  options: props => ({
    refetchQueries: [
      {
        query: MyPastesQuery,
        variables: { userId: props.user._id },
      }
    ]
  })
})

export default withAddPaste(CreatePasteForm)
