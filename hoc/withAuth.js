import React, { PureComponent } from 'react'
import { gql, graphql } from 'react-apollo'

import Cookies from 'js-cookie'

export default ComposedComponent => {
  class WithAuth extends PureComponent {
    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  const UserProfileQuery = gql`
    query userProfile($accessToken: String) {
      userProfile(accessToken: $accessToken) {
        id
        email
        firstName
        lastName
      }
    }
  `
  return graphql(UserProfileQuery, {
    props: ({ data: { loading, userProfile } }) => ({
      loading,
      userProfile
    }),
    options: () => ({
      variables: {
        accessToken: Cookies.get('accesstoken')
      }
    })
  })(WithAuth)
}
