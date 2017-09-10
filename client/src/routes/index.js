import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Blogs from './Blogs'
import Create from './Create'
import Home from './Home'
import Login from './Login'
import React from 'react'
import SignUp from './SignUp'

Home.load()
Blogs.load()
Login.load()
SignUp.load()
Create.load()

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/create" component={Create} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
