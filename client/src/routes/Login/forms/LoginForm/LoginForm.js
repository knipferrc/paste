import { Button, Form, Segment } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'

import Input from 'components/Input'
import React from 'react'

const required = value => (value ? undefined : 'Required')

const handleSubmit = () => {
  alert('submitting')
}

const LoginForm = () => {
  return (
    <Form size="large" onSubmit={handleSubmit}>
      <Segment stacked>
        <Field
          name="email"
          fluid
          icon="user"
          validate={required}
          iconPosition="left"
          placeholder="E-mail address"
          component={Input}
        />
        <Field
          name="password"
          fluid
          icon="lock"
          iconPosition="left"
          placeholder="Password"
          type="password"
          component={Input}
        />
        <Button type="submit" color="blue" fluid size="large">
          Login
        </Button>
      </Segment>
    </Form>
  )
}

export default reduxForm({
  form: 'login',
})(LoginForm)
