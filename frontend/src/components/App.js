import 'semantic-ui-css/semantic.min.css'

import { ApolloProvider } from 'react-apollo'
import PropTypes from 'prop-types'
import React from 'react'
import client from 'store/client'
import { injectGlobal } from 'styled-components'
import store from 'store/store'

const propTypes = {
  children: PropTypes.node
}

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    background: #F5F5F5;
  }
`

const App = ({ children }) => (
  <ApolloProvider client={client} store={store}>
    {children}
  </ApolloProvider>
)

App.propTypes = propTypes

export default App
