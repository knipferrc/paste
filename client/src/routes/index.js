import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home'
import React from 'react'

const Router = () => {
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
  )
}

export default Router

