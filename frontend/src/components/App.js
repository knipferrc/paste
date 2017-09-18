import 'semantic-ui-css/semantic.min.css'

import React, { PureComponent } from 'react'

import { ApolloProvider } from 'react-apollo'
import PropTypes from 'prop-types'
import client from 'store/client'
import { injectGlobal } from 'styled-components'
import store from 'store/store'

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    background: #f8f9f9;
  }
`

export default class App extends PureComponent {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const { children } = this.props
    return (
      <ApolloProvider client={client} store={store}>
        {children}
      </ApolloProvider>
    )
  }
}
