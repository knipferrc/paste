import { Button, Form, Header, Message, Segment } from 'semantic-ui-react'

import Cookies from 'js-cookie'
import { Formik } from 'formik'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  register: PropTypes.func,
  history: PropTypes.object
}

const RegisterForm = ({ register, history }) => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }}
      validate={values => {
        let errors = {}
        if (!values.firstName) {
          errors.firstName = 'Required'
        }
        if (!values.lastName) {
          errors.lastName = 'Required'
        }
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
          const token = await register(
            values.firstName,
            values.lastName,
            values.email,
            values.password
          )
          Cookies.set('accesstoken', token.data.register, { path: '/' })
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
              Register For An Account Today
            </Header>
            {errors.submitError && (
              <Message negative>
                <Message.Header>{errors.submitError}</Message.Header>
              </Message>
            )}
            <Form.Input
              type="text"
              name="firstName"
              error={touched.firstName && errors.firstName ? true : false}
              onChange={handleChange}
              value={values.firstName}
              icon="user"
              iconPosition="left"
              placeholder="First name"
              fluid
            />
            <Form.Input
              type="text"
              name="lastName"
              error={touched.lastName && errors.lastName ? true : false}
              onChange={handleChange}
              value={values.lastName}
              icon="user"
              iconPosition="left"
              placeholder="Last Name"
              fluid
            />
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
              Register
            </Button>
            <Message>
              Already A Member? <Link to="/login">Login</Link>
            </Message>
          </Segment>
        </Form>
      )}
    />
  )
}

RegisterForm.propTypes = propTypes

export default RegisterForm
