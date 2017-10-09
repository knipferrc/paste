import { ApolloClient, createNetworkInterface } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri:
    process.env.NODE_ENV === 'production'
      ? 'https://pastey.now.sh/api'
      : 'http://localhost:3000/api'
})

export default new ApolloClient({
  initialState: window.__APOLLO_STATE__,
  ssrForceFetchDelay: 100,
  dataIdFromObject: o => o.id,
  networkInterface: networkInterface
})
