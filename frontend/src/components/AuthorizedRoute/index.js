import { Redirect, Route } from 'react-router-dom'

import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  component: PropTypes.func
}

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

AuthorizedRoute.propTypes = propTypes

export default AuthorizedRoute
