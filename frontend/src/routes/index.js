import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Blogs from './Blogs'
import Dashboard from './Dashboard'
import EditBlog from './EditBlog'
import Home from './Home'
import Login from './Login'
import NotFound from 'components/NotFound'
import React from 'react'
import SignUp from './SignUp'

Home.load()
Blogs.load()
Login.load()
SignUp.load()
EditBlog.load()
Dashboard.load()

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/edit-blog/:id" component={EditBlog} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
