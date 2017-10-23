import { ApolloClient, createBatchingNetworkInterface } from 'react-apollo'

export default new ApolloClient({
  initialState: window.__APOLLO_STATE__,
  ssrMode: true,
  ssrForceFetchDelay: 100,
  networkInterface: createBatchingNetworkInterface({
    batchInterval: 10,
    uri:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/api'
        : 'https://pastey.now.sh/api',
    opts: {
      credentials: 'same-origin'
    }
  })
})
