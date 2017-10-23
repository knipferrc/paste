import MyPastesQuery from './queries/myPastes'
import { graphql } from 'react-apollo'

const withMyPastes = graphql(MyPastesQuery, {
  props: ({ data: { loading, myPastes } }) => ({
    loading,
    myPastes
  }),
  options: () => ({
    variables: {
      userId: 'd251f11e-fa59-4f89-a9fc-f9274010a1bc'
    }
  })
})

export default withMyPastes
