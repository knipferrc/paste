import Cookies from 'js-cookie'
import { Formik } from 'formik'
import React from 'react'
import hoc from './hoc'

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
          Cookies.set('accesstoken', token.data.login, { path: '/' })
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
        <form onSubmit={handleSubmit}>
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
                Login
              </button>
            </p>
          </div>
        </form>
      )}
    />
  )
}

export default hoc(LoginForm)
