import { compose, graphql } from 'react-apollo'

import EditPasteForm from './EditPasteForm'
import PasteContentQuery from '../../queries/pasteContent'
import UpdatePasteContentMutation from '../../mutations/updatePasteContent'

const withPasteContent = graphql(PasteContentQuery, {
  props: ({ data: { loading, pasteContent } }) => ({
    loading,
    pasteContent
  }),
  options: props => ({
    variables: {
      pasteId: props.pasteId
    }
  })
})

const withUpdatePasteContent = graphql(UpdatePasteContentMutation, {
  props: ({ mutate }) => ({
    updatePasteContent: (pasteId, pasteContent) => {
      return mutate({
        variables: { pasteId, pasteContent },
        optimisticResponse: {
          __typename: 'Mutation',
          updatePasteContent: {
            __typename: 'Paste',
            _id: pasteId,
            content: pasteContent
          }
        }
      })
    }
  }),
  options: props => ({
    refetchQueries: [
      {
        query: PasteContentQuery,
        variables: { pasteId: props.pasteId }
      }
    ]
  })
})

export default compose(withPasteContent, withUpdatePasteContent)(EditPasteForm)
