import MyPastesQuery from '../../queries/myPastes'
import PublishPasteButton from './PublishPasteButton'
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
            pasteId,
            status
          }
        }
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

export default withSetPublishingStatus(PublishPasteButton)
