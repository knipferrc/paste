import DefaultLayout from 'client/layouts/DefaultLayout'
import LoginForm from '../../forms/LoginForm'
import React from 'react'
import styled from 'styled-components'

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

const LoginView = ({ history }) => (
  <DefaultLayout>
    <div className="container">
      <div className="row">
        <CenteredContainer>
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-6 col-xl-6">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Login</div>
                <div className="card-subtitle text-gray">
                  Welcome to #Pastey!, login to get started
                </div>
              </div>
              <div className="card-body">
                <LoginForm history={history} />
              </div>
            </div>
          </div>
        </CenteredContainer>
      </div>
    </div>
  </DefaultLayout>
)

export default LoginView
