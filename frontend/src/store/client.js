import { ApolloClient, createNetworkInterface } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri:
    process.env.NODE_ENV === 'production'
      ? 'https://pastey-server.now.sh/api'
      : 'http://localhost:5000/api'
})

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('accessToken');
    req.options.headers.authorization = token ? token : null;
    next();
  }
}]);

const client = new ApolloClient({
  networkInterface: networkInterface
})

export default client
