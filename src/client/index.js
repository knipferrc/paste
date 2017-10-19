import 'bulma/css/bulma.css'

import BrowserRouter from 'react-router-dom/BrowserRouter'
import React from 'react'
import { hydrate } from 'react-dom'
import registerServiceWorker from './utils/registerServiceWorker'
import { renderRoutes } from 'react-router-config'
import routes from './routes'

hydrate(
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>,
  document.getElementById('root')
)

registerServiceWorker()

if (module.hot) {
  module.hot.accept()
}
