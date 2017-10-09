import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import React from 'react'

const Routes = () => {
  return [
    <Switch key="routes">
      <Route exact path="/" component={Home} />
    </Switch>
  ]
}

export default Routes
