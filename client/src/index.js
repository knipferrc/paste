import App from 'components/App'
import React from 'react'
import Routes from './routes'
import registerServiceWorker from 'lib/registerServiceWorker'
import { render } from 'react-dom'

render(
  <App>
    <Routes />
  </App>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./routes', () => {
    render(
      <App>
        <Routes />
      </App>,
      document.getElementById('root')
    )
  })
}

registerServiceWorker()
