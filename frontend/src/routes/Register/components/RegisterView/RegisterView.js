import DefaultLayout from 'layouts/DefaultLayout'
import { Grid } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import React from 'react'
import RegisterForm from '../../forms/RegisterForm'

const propTypes = {
  register: PropTypes.func
}

const RegisterView = ({ register }) => {
  return (
    <DefaultLayout title="#Pastey! - Sign Up">
      <Grid textAlign="center" padded>
        <Grid.Column style={{ maxWidth: 450 }}>
          <RegisterForm register={register} />
        </Grid.Column>
      </Grid>
    </DefaultLayout>
  )
}

RegisterView.propTypes = propTypes

export default RegisterView
