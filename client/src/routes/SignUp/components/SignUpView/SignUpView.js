import { Grid, Header, Message, Segment } from 'semantic-ui-react'

import { Link } from 'react-router-dom'
import React from 'react'
import SignUpForm from '../../forms/SignUpForm'

const SignUpView = () => (
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
          Register for an account today
        </Header>
        <SignUpForm />
        <Message>
          Already A Member? <Link to="/login">Login</Link>
        </Message>
        </Segment>
      </Grid.Column>
    </Grid>
  </div>
)

export default SignUpView
