import CreatePasteForm from '../../forms/CreatePasteForm'
import DefaultLayout from 'layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  history: PropTypes.object
}

const CreatePasteView = ({ history }) => {
  return (
    <DefaultLayout title="#Pastey! - Create Blog">
      {({ user }) => <CreatePasteForm user={user} history={history} />}
    </DefaultLayout>
  )
}

CreatePasteView.propTypes = propTypes

export default CreatePasteView
