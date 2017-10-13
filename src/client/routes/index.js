import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import Login from './Login'
import React from 'react'
import Register from './Register'

const Routes = () => (
  <Switch key="routes">
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
  </Switch>
)

export default Routes
