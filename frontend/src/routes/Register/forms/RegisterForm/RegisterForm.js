import { Button, Form, Header, Message, Segment } from 'semantic-ui-react'
import React, { PureComponent } from 'react'

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class RegisterForm extends PureComponent {
  static propTypes = {
    register: PropTypes.func,
    history: PropTypes.object
  }

  state = {
    hasError: '',
    loading: false
  }

  submit = async values => {
    try {
      this.setState({ loading: true, hasError: '' })
      const token = await this.props.register(
        values.firstName,
        values.lastName,
        values.email,
        values.password
      )
      localStorage.setItem('accessToken', token.data.register)
      this.setState({ loading: false })
      this.props.history.push('/')
    } catch (e) {
      this.setState({
        errorMessage: e.graphQLErrors[0].message,
        loading: false
      })
    }
  }

  render() {
    const { errorMessage, loading } = this.state
    return (
      <Form loading={loading} size="large" onSubmit={this.submit}>
        <Segment stacked>
          <Header as="h1" textAlign="center">
            Register for an account today
          </Header>
          {errorMessage && (
            <Message negative>
              <Message.Header>{errorMessage}</Message.Header>
            </Message>
          )}
          <Form.Input
            type="text"
            name="firstName"
            icon="user"
            iconPosition="left"
            placeholder="First Name"
            fluid
          />
          <Form.Input
            type="text"
            name="lastName"
            icon="user"
            iconPosition="left"
            placeholder="Last name"
            fluid
          />
          <Form.Input
            type="email"
            name="email"
            icon="mail"
            iconPosition="left"
            placeholder="E-mail address"
            fluid
          />
          <Form.Input
            type="password"
            name="password"
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            fluid
          />
          <Button type="submit" color="teal" fluid size="large">
            Register
          </Button>
          <Message>
            Already A Member? <Link to="/login">Login</Link>
          </Message>
        </Segment>
      </Form>
    )
  }
}
