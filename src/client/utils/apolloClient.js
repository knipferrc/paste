import { ApolloClient, createBatchingNetworkInterface } from 'react-apollo'

const networkInterface = createBatchingNetworkInterface({
  uri:
    process.env.NODE_ENV === 'production'
      ? 'https://pastey.now.sh/api'
      : 'http://localhost:3000/api',
  batchInterval: 10,
  opts: {
    credentials: 'include'
  }
})

export default new ApolloClient({
  networkInterface,
  initialState: window.__APOLLO_STATE__,
  ssrForceFetchDelay: 100
})
