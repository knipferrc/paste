import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-exp.min.css'
import 'spectre.css/dist/spectre-icons.min.css'

import { ApolloProvider } from 'react-apollo'
import App from './routes'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import React from 'react'
import apolloClient from './utils/apolloClient'
import { hydrate } from 'react-dom'
import registerServiceWorker from './utils/registerServiceWorker'

hydrate(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
)

registerServiceWorker()

if (module.hot) {
  module.hot.accept()
}
