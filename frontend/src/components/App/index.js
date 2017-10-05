import 'semantic-ui-css/semantic.min.css'

import { ApolloProvider } from 'react-apollo'
import PropTypes from 'prop-types'
import React from 'react'
import apolloClient from 'lib/apolloClient'

const propTypes = {
  children: PropTypes.node
}

const App = ({ children }) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}

App.propTypes = propTypes

export default App
