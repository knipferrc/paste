import React, { PureComponent } from 'react'
import { gql, graphql } from 'react-apollo'

import Cookies from 'js-cookie'

export default ComposedComponent => {
  class withUser extends PureComponent {
    render() {
      return (
        <div>
          <ComposedComponent {...this.props} />
        </div>
      )
    }
  }

  const UserProfileQuery = gql`
    query userProfile($accessToken: String!) {
      userProfile(accessToken: $accessToken) {
        firstName
        lastName
        email
        id
      }
    }
  `

  return graphql(UserProfileQuery, {
    skip: () => !Cookies.get('accesstoken'),
    props: ({ data: { loading, userProfile } }) => ({
      loading,
      userProfile
    }),
    options: () => ({
      variables: {
        accessToken: Cookies.get('accesstoken')
      }
    })
  })(withUser)
}
