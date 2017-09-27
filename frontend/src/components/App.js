import 'semantic-ui-css/semantic.min.css'

import { ApolloProvider } from 'react-apollo'
import PropTypes from 'prop-types'
import React from 'react'
import apolloClient from 'lib/apolloClient'
import { injectGlobal } from 'styled-components'

const propTypes = {
  children: PropTypes.node
}

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
`

const App = ({ children }) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}

App.propTypes = propTypes

export default App
