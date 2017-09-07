import { ApolloClient, createNetworkInterface } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri:
    process.env.NODE_ENV === 'production'
      ? 'https://pastey-server.now.sh/api'
      : 'http://localhost:5000/api',
  opts: {
    headers: {
      credentials: 'include',
    },
  },
})

const client = new ApolloClient({
  networkInterface: networkInterface,
})

export default client
