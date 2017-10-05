import { ApolloClient, createBatchingNetworkInterface } from 'react-apollo'

const networkInterface = createBatchingNetworkInterface({
  batchInterval: 10,
  uri:
    process.env.NODE_ENV === 'production'
      ? 'https://pastey.now.sh/api'
      : 'http://localhost:3000/api'
})

const client = new ApolloClient({
  networkInterface: networkInterface,
  queryDeduplication: true,
  ssrMode: !process.browser,
  dataIdFromObject: o => o._id,
  connectToDevTools: process.browser
})

export default client
