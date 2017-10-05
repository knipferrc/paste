import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import Routes from './routes'
import { hydrate } from 'react-dom'

hydrate(
  <App>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </App>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
