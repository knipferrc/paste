import Cookies from 'js-cookie'
import { Formik } from 'formik'
import React from 'react'
import hoc from './hoc'
import styled from 'styled-components'

const SubmitButton = styled.button`
  width: 100%;
`

const RegisterForm = ({ register, history }) => (
  <Formik
    initialValues={{
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    }}
    validate={values => {
      let errors = {}
      if (!values.email) {
        errors.email = 'Required'
      }
      if (!values.password) {
        errors.password = 'Required'
      }
      if (!values.firstName) {
        errors.firstName = 'Required'
      }
      if (!values.lastName) {
        errors.lastName = 'Required'
      }
      return errors
    }}
    onSubmit={async (values, { setSubmitting, setErrors }) => {
      try {
        setSubmitting(true)
        const token = await register(
          values.email,
          values.password,
          values.firstName,
          values.lastName
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
      <form className="form-group" onSubmit={handleSubmit}>
        {errors.submitError && (
          <div className="toast toast-error">{errors.submitError}</div>
        )}
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
        <label className="form-label label-leg">First Name:</label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={values.firstName}
          className={`form-input input-lg ${touched.firstName &&
            errors.firstName &&
            'is-error'}`}
        />
        <label className="form-label label-leg">Last Name:</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={values.lastName}
          className={`form-input input-lg ${touched.lastName &&
            errors.lastName &&
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

export default hoc(RegisterForm)
