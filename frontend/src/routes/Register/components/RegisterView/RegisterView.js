import DefaultLayout from 'layouts/DefaultLayout'
import { Grid } from 'semantic-ui-react'
import React from 'react'
import RegisterForm from '../../forms/RegisterForm'

const RegisterView = () => {
  return (
    <DefaultLayout title="#Pastey! - Sign Up">
      <Grid textAlign="center" padded>
        <Grid.Column style={{ maxWidth: 450 }}>
          <RegisterForm />
        </Grid.Column>
      </Grid>
    </DefaultLayout>
  )
}

export default RegisterView
