import { ApolloClient, createNetworkInterface } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: process.env.NODE_ENV === 'production' ? 'https://paste-server.now.sh/api' : 'http://localhost:5000/api'
})

const client = new ApolloClient({
  networkInterface: networkInterface
})

export default client
