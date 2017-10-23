import 'bulma/css/bulma.css'

import { ApolloProvider } from 'react-apollo'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import React from 'react'
import client from 'client/lib/apollo'
import { hydrate } from 'react-dom'
import registerServiceWorker from './utils/registerServiceWorker'
import { renderRoutes } from 'react-router-config'
import routes from './routes'

hydrate(
  <ApolloProvider client={client}>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
)

registerServiceWorker()

if (module.hot) {
  module.hot.accept()
}
