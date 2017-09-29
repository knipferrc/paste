import PasteActions from './PasteActions'
import SetPublishingStatusMutation from '../../mutations/setPublishingStatus'
import { graphql } from 'react-apollo'

const withSetPublishingStatus = graphql(SetPublishingStatusMutation, {
  props: ({ mutate }) => ({
    setPublishingStatus: (pasteId, status) => {
      return mutate({
        variables: { pasteId, status },
        optimisticResponse: {
          __typename: 'Mutation',
          setPublishingStatus: {
            __typename: 'Paste',
            _id: pasteId,
            status
          }
        }
      })
    }
  })
})

export default withSetPublishingStatus(PasteActions)
