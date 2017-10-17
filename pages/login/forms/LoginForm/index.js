import { Button, Form, Icon, Input } from 'antd'

import Cookies from 'js-cookie'
import { Formik } from 'formik'
import PropTypes from 'prop-types'
import React from 'react'
import Router from 'next/router'
import hoc from './hoc'

const FormItem = Form.Item

const LoginForm = ({ login }) => (
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
        Router.push('/')
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
      <Form onSubmit={handleSubmit}>
        <FormItem
          validateStatus={touched.email && errors.email && 'error'}
          help={errors.email}
        >
          <Input
            name="email"
            value={values.email}
            onChange={handleChange}
            prefix={<Icon type="user" />}
            placeholder="Email"
          />
        </FormItem>
        <FormItem
          validateStatus={touched.password && errors.password && 'error'}
          help={errors.password}
        >
          <Input
            name="password"
            value={values.password}
            onChange={handleChange}
            prefix={<Icon type="lock" />}
            type="password"
            placeholder="Password"
          />
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: '100%' }}
            loading={isSubmitting}
          >
            Log in
          </Button>
        </FormItem>
      </Form>
    )}
  />
)

LoginForm.propTypes = {
  form: PropTypes.object,
  login: PropTypes.func
}

export default hoc(LoginForm)
