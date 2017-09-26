import DefaultLayout from 'layouts/DefaultLayout'
import EditPasteForm from '../../forms/EditPasteForm'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
}

const Container = styled.div`margin: 5px;`

const EditPasteView = ({ history, match }) => {
  return (
    <DefaultLayout title="#Pastey! - Edit Paste">
      {() => (
        <Container>
          <EditPasteForm history={history} pasteId={match.params.id} />
        </Container>
      )}
    </DefaultLayout>
  )
}

EditPasteView.propTypes = propTypes

export default EditPasteView
