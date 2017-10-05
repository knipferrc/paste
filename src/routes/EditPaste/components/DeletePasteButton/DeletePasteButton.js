import { Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  deletePaste: PropTypes.func,
  pasteId: PropTypes.string,
  history: PropTypes.object
}

const removePaste = async (deletePaste, pasteId, history) => {
  try {
    await deletePaste(pasteId)
    history.push('/dashboard')
  } catch (e) {
    // catch error
  }
}

const DeletePasteButton = ({ deletePaste, pasteId, history }) => {
  return (
    <Button
      color="red"
      type="button"
      fluid
      icon="remove circle"
      content="Delete Paste"
      onClick={() => removePaste(deletePaste, pasteId, history)}
    />
  )
}

DeletePasteButton.propTypes = propTypes

export default DeletePasteButton
