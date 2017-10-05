import { Redirect, Route } from 'react-router-dom'

import Cookies from 'js-cookie'
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
        Cookies.get('accesstoken') ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )}
    />
  )
}

AuthorizedRoute.propTypes = propTypes

export default AuthorizedRoute
