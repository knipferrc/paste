import PropTypes from 'prop-types'
import React from 'react'
import hoc from './hoc'

const Auth = ({ children, userProfile }) => {
  return (
    <div>
      {children({ user: userProfile })}
    </div>
  )
}

Auth.propTypes = {
  children: PropTypes.func,
  loading: PropTypes.bool,
  userProfile: PropTypes.object
}

export default hoc(Auth)
