import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-exp.min.css'
import 'spectre.css/dist/spectre-icons.min.css'

import { ApolloProvider } from 'react-apollo'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import React from 'react'
import apolloClient from './utils/apolloClient'
import { hydrate } from 'react-dom'
import registerServiceWorker from './utils/registerServiceWorker'
import { renderRoutes } from 'react-router-config'
import routes from './routes'

hydrate(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
)

registerServiceWorker()

if (module.hot) {
  module.hot.accept()
}
