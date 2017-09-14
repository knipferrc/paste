import DefaultLayout from 'layouts/DefaultLayout'
import { Grid } from 'semantic-ui-react'
import LoginForm from '../../forms/LoginForm'
import React from 'react'

const LoginView = () => {
  return (
    <DefaultLayout title="#Pastey! - Login">
      <Grid textAlign="center" padded>
        <Grid.Column style={{ maxWidth: 450 }}>
          <LoginForm />
        </Grid.Column>
      </Grid>
    </DefaultLayout>
  )
}

export default LoginView
