import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AuthorizedRoute from 'components/AuthorizedRoute'
import CreatePaste from './CreatePaste'
import Dashboard from './Dashboard'
import Documentation from './Documentation'
import EditPaste from './EditPaste'
import Home from './Home'
import Login from './Login'
import NotFound from 'components/NotFound'
import PasteDetails from './PasteDetails'
import Pastes from './Pastes'
import PublishPaste from './PublishPaste'
import React from 'react'
import Register from './Register'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/pastes" component={Pastes} />
        <AuthorizedRoute
          exact
          path="/documentation"
          component={Documentation}
        />
        <AuthorizedRoute exact path="/pastes/:id" component={PasteDetails} />
        <AuthorizedRoute exact path="/create-paste" component={CreatePaste} />
        <AuthorizedRoute
          exact
          path="/dashboard/edit/:id"
          component={EditPaste}
        />
        <AuthorizedRoute
          exact
          path="/dashboard/publish/:id"
          component={PublishPaste}
        />
        <AuthorizedRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
