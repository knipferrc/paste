import DefaultLayout from 'layouts/DefaultLayout'
import EditPasteForm from '../../forms/EditPasteForm'
import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  user: PropTypes.object
}

const EditPasteView = ({ history, match }) => {
  return (
    <DefaultLayout title="#Pastey! - Edit Paste">
      {({ user }) => (
        <EditPasteForm
          history={history}
          pasteId={match.params.id}
          user={user}
        />
      )}
    </DefaultLayout>
  )
}

EditPasteView.propTypes = propTypes

export default EditPasteView
