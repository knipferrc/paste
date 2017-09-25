import MyPastesQuery from '../../queries/myPastes'
import PublishPasteButton from './PublishPasteButton'
import PublishPasteMutation from '../../mutations/publishPaste'
import { graphql } from 'react-apollo'

const withPublishPaste = graphql(PublishPasteMutation, {
  props: ({ mutate }) => ({
    publishPaste: pasteId => {
      return mutate({
        variables: { pasteId }
      })
    }
  }),
  options: props => ({
    refetchQueries: [
      {
        query: MyPastesQuery,
        variables: { userId: props.userId }
      }
    ]
  })
})

export default withPublishPaste(PublishPasteButton)
