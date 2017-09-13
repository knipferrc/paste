import { Grid, Header, Message } from 'semantic-ui-react'

import { Link } from 'react-router-dom'
import LoginForm from '../../forms/LoginForm'
import React from 'react'

const LoginView = () => (
  <Grid textAlign="center" padded>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h1" textAlign="center">
        Log-in to your account
      </Header>
      <LoginForm />
      <Message>
        New to #pastey!? <Link to="/signup">Sign Up</Link>
      </Message>
    </Grid.Column>
  </Grid>
)

export default LoginView
