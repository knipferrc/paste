import DefaultLayout from 'layouts/DefaultLayout'
import { Grid } from 'semantic-ui-react'
import LoginForm from '../../forms/LoginForm'
import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  login: PropTypes.func,
  history: PropTypes.object
}

const LoginView = ({ login, history }) => {
  return (
    <DefaultLayout title="#Pastey! - Login">
      <Grid textAlign="center" padded>
        <Grid.Column style={{ maxWidth: 450 }}>
          <LoginForm login={login} history={history} />
        </Grid.Column>
      </Grid>
    </DefaultLayout>
  )
}

LoginView.propTypes = propTypes

export default LoginView
