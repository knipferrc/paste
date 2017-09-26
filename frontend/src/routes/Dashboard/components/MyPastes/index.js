import { compose, graphql } from 'react-apollo'

import MyPastes from './MyPastes'
import MyPastesQuery from '../../queries/myPastes'
import SetPublishingStatusMutation from '../../mutations/setPublishingStatus'

const withMyPastes = graphql(MyPastesQuery, {
  props: ({ data: { loading, myPastes } }) => ({
    loading,
    myPastes
  }),
  options: props => ({
    variables: {
      userId: props.user._id
    }
  })
})

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

export default compose(withMyPastes, withSetPublishingStatus)(MyPastes)
