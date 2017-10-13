import { ApolloClient, createNetworkInterface } from 'react-apollo'

let apolloClient = null

const create = initialState => {
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

export default initialState => {
  if (!process.browser) {
    return create(initialState)
  }

  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
