import DefaultLayout from 'client/layouts/DefaultLayout'
import React from 'react'
import RegisterForm from '../../forms/RegisterForm'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const RegisterView = ({ history }) => {
  return (
    <DefaultLayout>
      <div className="container">
        <Container>
          <div className="column is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
            <article className="message">
              <div className="message-header">
                <p>Welcome, Register Now</p>
              </div>
              <div className="message-body">
                <RegisterForm history={history} />
              </div>
            </article>
          </div>
        </Container>
      </div>
    </DefaultLayout>
  )
}

export default RegisterView
