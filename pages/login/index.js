import DefaultLayout from 'layouts/DefaultLayout'
import React from 'react'
import withData from 'lib/withData'

const Login = () => (
  <DefaultLayout title="Login">
    <h1>Login</h1>
  </DefaultLayout>
)

export default withData(Login)
