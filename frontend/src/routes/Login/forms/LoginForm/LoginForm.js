import { Button, Form, Header, Message, Segment } from 'semantic-ui-react'

import { Formik } from 'formik'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  login: PropTypes.func,
  history: PropTypes.object
}

const LoginForm = ({ login, history }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validate={values => {
        let errors = {}
        if (!values.email) {
          errors.email = 'Required'
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address'
        }
        if (!values.password) {
          errors.password = 'Required'
        }
        return errors
      }}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        try {
          setSubmitting(true)
          const token = await login(values.email, values.password)
          localStorage.setItem('accessToken', token.data.login)
          history.push('/')
        } catch (e) {
          setSubmitting(false)
          setErrors({ submitError: e.graphQLErrors[0].message })
        }
      }}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting
      }) => (
        <Form loading={isSubmitting} size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Header as="h1" textAlign="center">
              Log In to your account
            </Header>
            {errors.submitError && (
              <Message negative>
                <Message.Header>{errors.submitError}</Message.Header>
              </Message>
            )}
            <Form.Input
              type="email"
              name="email"
              error={touched.email && errors.email ? true : false}
              onChange={handleChange}
              value={values.email}
              icon="mail"
              iconPosition="left"
              placeholder="E-mail address"
              fluid
            />
            <Form.Input
              type="password"
              name="password"
              icon="lock"
              value={values.password}
              error={touched.password && errors.password ? true : false}
              onChange={handleChange}
              iconPosition="left"
              placeholder="Password"
              fluid
            />
            <Button type="submit" color="teal" fluid size="large">
              Login
            </Button>
            <Message>
              New to #pastey!? <Link to="/register">Register</Link>
            </Message>
          </Segment>
        </Form>
      )}
    />
  )
}

LoginForm.propTypes = propTypes

export default LoginForm
