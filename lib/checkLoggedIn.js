import Cookies from 'js-cookie'
import cookie from 'cookie'
import { gql } from 'react-apollo'

function parseCookies(ctx = {}, options = {}) {
  return cookie.parse(
    ctx.req && ctx.req.headers.cookie
      ? ctx.req.headers.cookie
      : document.cookie,
    options
  )
}

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
