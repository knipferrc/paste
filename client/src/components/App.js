import PropTypes from 'prop-types'
import { Provider } from 'rebass'
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { injectGlobal } from 'styled-components'
import store from 'store/store'

const propTypes = {
  children: PropTypes.node,
}

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
`

const App = ({ children }) => (
  <Provider>
    <ReduxProvider store={store}>{children}</ReduxProvider>
  </Provider>
)

App.propTypes = propTypes

export default App
