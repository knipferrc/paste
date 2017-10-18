import { Card, Col, Row } from 'antd'

import React from 'react'
import RegisterForm from './forms/RegisterForm'
import hoc from './hoc'

const Register = () => (
  <div>
    <Row type="flex" justify="center" style={{ margin: 10 }}>
      <Col xs={24} sm={14} md={12} lg={8} xl={8}>
        <Card title="Register">
          <RegisterForm />
        </Card>
      </Col>
    </Row>
  </div>
)

export default hoc(Register)
