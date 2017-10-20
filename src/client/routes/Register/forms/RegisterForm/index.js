import Cookies from 'js-cookie'
import { Formik } from 'formik'
import React from 'react'
import axios from 'axios'

const RegisterForm = ({ history }) => {
  return (
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
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address'
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
          const { data: { token } } = await axios.post('/api/users/register', {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password
          })
          Cookies.set('accesstoken', token, { path: '/' })
          history.push('/')
        } catch (e) {
          setSubmitting(false)
          setErrors({ submitError: e })
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
        <form onSubmit={handleSubmit}>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                value={values.firstName}
                onChange={handleChange}
                name="firstName"
                className={`input ${touched.firstName &&
                  errors.firstName &&
                  'is-danger'}`}
                type="text"
                placeholder="First Name"
              />
              <span className="icon is-small is-left">
                <i className="fa fa-envelope" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                value={values.lastName}
                onChange={handleChange}
                name="lastName"
                className={`input ${touched.lastName &&
                  errors.lastName &&
                  'is-danger'}`}
                type="text"
                placeholder="Last Name"
              />
              <span className="icon is-small is-left">
                <i className="fa fa-envelope" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                value={values.email}
                onChange={handleChange}
                name="email"
                className={`input ${touched.email &&
                  errors.email &&
                  'is-danger'}`}
                type="email"
                placeholder="Email"
              />
              <span className="icon is-small is-left">
                <i className="fa fa-envelope" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                value={values.password}
                onChange={handleChange}
                name="password"
                className={`input ${touched.password &&
                  errors.password &&
                  'is-danger'}`}
                type="password"
                placeholder="Password"
              />
              <span className="icon is-small is-left">
                <i className="fa fa-lock" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button
                type="submit"
                className={`button is-danger is-fullwidth ${isSubmitting &&
                  'is-loading'}`}
              >
                Register
              </button>
            </p>
          </div>
        </form>
      )}
    />
  )
}

export default RegisterForm
