import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

import { Link } from 'react-router-dom'
import React from 'react'

const LoginForm = () => (
  <div>
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
        background: #2185d0;
      }
    `}</style>
    <Grid
      textAlign="center"
      style={{ height: '100%', margin: 0 }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h1" inverted textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />
            <Button color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to #pastey!? <Link to="/signup">Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default LoginForm
