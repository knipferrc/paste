import { ApolloClient, createNetworkInterface } from 'react-apollo'

let apolloClient = null

function create(initialState) {
  return new ApolloClient({
    initialState,
    ssrMode: !process.browser,
    networkInterface: createNetworkInterface({
      uri:
        process.env.NODE_ENV === 'production'
          ? 'https://pastey.now.sh/api'
          : 'http://localhost:3000/api',
      opts: {
        credentials: 'same-origin'
      }
    })
  })
}

export default function initApollo(initialState) {
  if (!process.browser) {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
