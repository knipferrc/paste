import { Button, Form, Icon, Input } from 'antd'

import Cookies from 'js-cookie'
import { Formik } from 'formik'
import PropTypes from 'prop-types'
import React from 'react'
import Router from 'next/router'
import hoc from './hoc'

const FormItem = Form.Item

const RegisterForm = ({ register }) => (
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
        const token = await register(
          values.firstName,
          values.lastName,
          values.email,
          values.password
        )
        Cookies.set('accesstoken', token.data.register, { path: '/' })
        Router.push('/dashboard')
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
          validateStatus={touched.firstName && errors.firstName && 'error'}
          help={touched.firstName && errors.firstName && errors.firstName}
        >
          <Input
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            prefix={<Icon type="caret-right" />}
            placeholder="First Name"
          />
        </FormItem>
        <FormItem
          validateStatus={touched.lastName && errors.lastName && 'error'}
          help={touched.lastName && errors.lastName && errors.lastName}
        >
          <Input
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            prefix={<Icon type="caret-left" />}
            placeholder="Last Name"
          />
        </FormItem>
        <FormItem
          validateStatus={touched.email && errors.email && 'error'}
          help={touched.email && errors.email && errors.email}
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
          help={touched.password && errors.password && errors.password}
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
            Register
          </Button>
        </FormItem>
      </Form>
    )}
  />
)

RegisterForm.propTypes = {
  register: PropTypes.func
}

export default hoc(RegisterForm)
