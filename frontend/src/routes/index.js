import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AuthorizedRoute from 'components/AuthorizedRoute'
import BlogDetails from './BlogDetails'
import Blogs from './Blogs'
import Dashboard from './Dashboard'
import EditBlog from './EditBlog'
import Home from './Home'
import Login from './Login'
import NotFound from 'components/NotFound'
import PublishBlog from './PublishBlog'
import React from 'react'
import Register from './Register'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <AuthorizedRoute exact path="/blogs" component={Blogs} />
        <AuthorizedRoute exact path="/blogs/:id" component={BlogDetails} />
        <AuthorizedRoute
          exact
          path="/dashboard/edit/:id"
          component={EditBlog}
        />
        <AuthorizedRoute
          exact
          path="/dashboard/publish/:id"
          component={PublishBlog}
        />
        <AuthorizedRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
