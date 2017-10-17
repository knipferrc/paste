import Cookies from 'js-cookie'
import { gql } from 'react-apollo'
import parseCookies from 'utils/parseCookies'

export default (context, apolloClient) =>
  apolloClient
    .query({
      query: gql`
        query userProfile($accessToken: String!) {
          userProfile(accessToken: $accessToken) {
            id
            email
            firstName
            lastName
          }
        }
      `,
      variables: {
        accessToken:
          parseCookies(context).accesstoken || Cookies.get('accesstoken')
      }
    })
    .then(({ data }) => {
      return { loggedInUser: data.userProfile }
    })
    .catch(e => {
      // Fail gracefully
      return { loggedInUser: {} }
    })
