import App from 'components/App'
import React from 'react'
import Router from './routes'
import registerServiceWorker from 'lib/registerServiceWorker'
import { render } from 'react-dom'

render(
  <App>
    <Router />
  </App>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./routes', () => {
    render(
      <App>
        <Router />
      </App>,
      document.getElementById('root')
    )
  })
}

registerServiceWorker()
