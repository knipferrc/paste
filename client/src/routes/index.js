import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Blogs from './Blogs'
import Home from './Home'
import Login from './Login'
import React from 'react'
import SignUp from './SignUp'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/blogs" component={Blogs} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
