import { Grid, Header, Message, Segment } from 'semantic-ui-react'

import { Link } from 'react-router-dom'
import LoginForm from '../../forms/LoginForm'
import React from 'react'

const LoginView = () => (
  <div>
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
        background: #00b5ad;
      }
    `}</style>
    <Grid
      textAlign="center"
      style={{ height: '100%', margin: 0 }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment inverted color="blue">
        <Header as="h1" inverted textAlign="center">
          Log-in to your account
        </Header>
        <LoginForm />
        <Message>
          New to #pastey!? <Link to="/signup">Sign Up</Link>
        </Message>
        </Segment>
      </Grid.Column>
    </Grid>
  </div>
)

export default LoginView
