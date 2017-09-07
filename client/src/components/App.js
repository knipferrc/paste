import { Provider } from 'rebass'
import React from 'react'
import { injectGlobal } from 'styled-components'

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }`

const App = ({ children }) => <Provider>{children}</Provider>

export default App
