import PropTypes from 'prop-types'
import { Provider } from 'rebass'
import React from 'react'
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

const App = ({ children }) => <Provider>{children}</Provider>

App.propTypes = propTypes

export default App
