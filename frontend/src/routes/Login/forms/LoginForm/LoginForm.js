import { Button, Form, Header, Message, Segment } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'

import Input from 'components/Input'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'
import { required } from 'lib/validations'

const propTypes = {
  handleSubmit: PropTypes.func
}

const login = values => {
  alert(JSON.stringify(values))
}

const LoginForm = ({ handleSubmit }) => {
  return (
    <Form size="large" onSubmit={handleSubmit(login)}>
      <Segment stacked>
        <Header as="h1" textAlign="center">
          Log In to your account
        </Header>
        <Field
          type="email"
          name="email"
          icon="mail"
          validate={required}
          iconPosition="left"
          placeholder="E-mail address"
          component={Input}
          fluid
        />
        <Field
          type="password"
          name="password"
          icon="lock"
          iconPosition="left"
          validate={required}
          placeholder="Password"
          component={Input}
          fluid
        />
        <Button type="submit" color="teal" fluid size="large">
          Login
        </Button>
        <Message>
          New to #pastey!? <Link to="/signup">Sign Up</Link>
        </Message>
      </Segment>
    </Form>
  )
}

LoginForm.propTypes = propTypes

export default reduxForm({
  form: 'login'
})(LoginForm)
