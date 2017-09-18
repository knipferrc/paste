import { Button, Form, Header, Message, Segment } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import React, { PureComponent } from 'react'

import Input from 'components/Input'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { required } from 'lib/validations'

class RegisterForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func,
    register: PropTypes.func
  }

  submit = async values => {
    await this.props.register(
      values.firstName,
      values.lastName,
      values.email,
      values.password
    )
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <Form size="large" onSubmit={handleSubmit(this.submit)}>
        <Segment stacked>
          <Header as="h1" textAlign="center">
            Register for an account today
          </Header>
          <Field
            type="text"
            name="firstName"
            icon="user"
            validate={required}
            iconPosition="left"
            placeholder="First Name"
            component={Input}
            fluid
          />
          <Field
            type="text"
            name="lastName"
            icon="user"
            validate={required}
            iconPosition="left"
            placeholder="Last name"
            component={Input}
            fluid
          />
          <Field
            type="email"
            name="email"
            icon="mail"
            validate={required}
            iconPosition="left"
            placeholder="E-mail address"
            component={Input}
            fluid
          />
          <Field
            type="password"
            name="password"
            icon="lock"
            validate={required}
            iconPosition="left"
            placeholder="Password"
            component={Input}
            fluid
          />
          <Button type="submit" color="teal" fluid size="large">
            SignUp
          </Button>
          <Message>
            Already A Member? <Link to="/login">Login</Link>
          </Message>
        </Segment>
      </Form>
    )
  }
}

export default reduxForm({
  form: 'signUp'
})(RegisterForm)