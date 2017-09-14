import { Grid, Header, Message } from 'semantic-ui-react'

import DefaultLayout from 'layouts/DefaultLayout'
import { Link } from 'react-router-dom'
import React from 'react'
import SignUpForm from '../../forms/SignUpForm'

const SignUpView = () => {
  return (
    <DefaultLayout title="#Pastey! - Sign Up">
      <Grid textAlign="center" padded>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" textAlign="center">
            Register for an account today
          </Header>
          <SignUpForm />
          <Message>
            Already A Member? <Link to="/login">Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </DefaultLayout>
  )
}

export default SignUpView
