import MyPastes from './MyPastes'
import MyPastesQuery from '../../queries/myPastes'
import { graphql } from 'react-apollo'

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

export default withMyPastes(MyPastes)
