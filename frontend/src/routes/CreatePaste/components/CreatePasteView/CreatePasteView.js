import CreatePasteForm from '../../forms/CreatePasteForm'
import DefaultLayout from 'layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const propTypes = {
  history: PropTypes.object
}

const Container = styled.div`margin: 5px;`

const CreatePasteView = ({ history }) => {
  return (
    <DefaultLayout title="#Pastey! - Create Blog">
      {({ user }) => (
        <Container>
          <CreatePasteForm user={user} history={history} />
        </Container>
      )}
    </DefaultLayout>
  )
}

CreatePasteView.propTypes = propTypes

export default CreatePasteView
