import Cookies from 'js-cookie'
import UserProfileQuery from './queries/userProfile'
import { graphql } from 'react-apollo'

const withUser = graphql(UserProfileQuery, {
  skip: Cookies.get('accesstoken') === undefined,
  props: ({ data: { loading, userProfile } }) => ({
    loading,
    userProfile
  }),
  options: () => ({
    variables: {
      accessToken: Cookies.get('accesstoken')
    }
  })
})

export default withUser
