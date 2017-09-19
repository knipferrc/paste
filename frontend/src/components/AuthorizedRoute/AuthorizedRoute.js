import { Redirect, Route } from 'react-router-dom'

import React from 'react'

const AuthorizedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('accessToken') ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )}
    />
  )
}

export default AuthorizedRoute
