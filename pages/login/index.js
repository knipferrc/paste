import { Card, Col, Row } from 'antd'

import DefaultLayout from 'layouts/DefaultLayout'
import LoginForm from './forms/LoginForm'
import React from 'react'
import hoc from './hoc'

const Login = () => (
  <DefaultLayout title="Login">
    <Row type="flex" justify="center" style={{ margin: 10 }}>
      <Col xs={24} sm={14} md={12} lg={8} xl={8}>
        <Card title="Login">
          <LoginForm />
        </Card>
      </Col>
    </Row>
  </DefaultLayout>
)

export default hoc(Login)
