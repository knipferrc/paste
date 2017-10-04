import DeletePasteButton from './DeletePasteButton'
import DeletePasteMutation from '../../mutations/deletePaste'
import MyPastesQuery from '../../queries/myPastes'
import { graphql } from 'react-apollo'

const withDeletePaste = graphql(DeletePasteMutation, {
  props: ({ ownProps: { userId }, mutate }) => ({
    deletePaste: pasteId =>
      mutate({
        variables: { pasteId },
        refetchQueries: [
          {
            query: MyPastesQuery,
            variables: { userId }
          }
        ]
      })
  })
})

export default withDeletePaste(DeletePasteButton)
