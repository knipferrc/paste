import DefaultLayout from 'client/layouts/DefaultLayout'
import LoginForm from '../../forms/LoginForm'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const LoginView = ({ history }) => {
  return (
    <DefaultLayout>
      <div className="container">
        <Container>
          <div className="column is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
            <article className="message">
              <div className="message-header">
                <p>Welcome, Login to continue</p>
              </div>
              <div className="message-body">
                <LoginForm history={history} />
              </div>
            </article>
          </div>
        </Container>
      </div>
    </DefaultLayout>
  )
}

LoginView.propTypes = {
  history: PropTypes.object
}

export default LoginView
