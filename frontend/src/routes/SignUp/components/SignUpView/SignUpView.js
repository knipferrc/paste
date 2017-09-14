import DefaultLayout from 'layouts/DefaultLayout'
import { Grid } from 'semantic-ui-react'
import React from 'react'
import SignUpForm from '../../forms/SignUpForm'

const SignUpView = () => {
  return (
    <DefaultLayout title="#Pastey! - Sign Up">
      <Grid textAlign="center" padded>
        <Grid.Column style={{ maxWidth: 450 }}>
          <SignUpForm />
        </Grid.Column>
      </Grid>
    </DefaultLayout>
  )
}

export default SignUpView
