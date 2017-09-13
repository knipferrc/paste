import { Grid, Header, Message } from 'semantic-ui-react'

import { Link } from 'react-router-dom'
import React from 'react'
import SignUpForm from '../../forms/SignUpForm'

const SignUpView = () => (
    <Grid
      textAlign="center"
      padded
    >
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
)

export default SignUpView
