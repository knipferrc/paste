import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home'
import React from 'react'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
)
