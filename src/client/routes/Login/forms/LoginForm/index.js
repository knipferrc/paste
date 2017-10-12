import Cookies from 'js-cookie'
import { Formik } from 'formik'
import React from 'react'
import hoc from './hoc'
import styled from 'styled-components'

const SubmitButton = styled.button`
  width: 100%;
`

const LoginForm = ({ login }) => (
  <Formik
    key="login-form"
    initialValues={{
      email: '',
      password: ''
    }}
    validate={values => {
      let errors = {}
      if (!values.email) {
        errors.email = 'Required'
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
        Cookies.set('accessToken', token.data.login, { path: '/' })
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
      <form className="form-group" onSubmit={handleSubmit}>
        <label className="form-label label-lg">Email:</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
          className={`form-input input-lg ${touched.email &&
            errors.email &&
            'is-error'}`}
        />
        <label className="form-label label-leg">Password:</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password}
          className={`form-input input-lg ${touched.email &&
            errors.email &&
            'is-error'}`}
        />
        <SubmitButton
          className={`btn btn-primary btn-large mt-2 ${isSubmitting &&
            'loading'}`}
          type="submit"
        >
          Submit
        </SubmitButton>
      </form>
    )}
  />
)

export default hoc(LoginForm)
