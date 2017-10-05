import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  setPublishingStatus: PropTypes.func,
  pasteId: PropTypes.string,
  history: PropTypes.object
}

const handleClick = (setPublishingStatus, pasteId, history) => {
  try {
    setPublishingStatus(pasteId, 'published')
    history.push('/dashboard')
  } catch (e) {
    return e
  }
}

const PasteActions = ({ setPublishingStatus, pasteId, history }) => {
  return (
    <Button.Group fluid>
      <Button icon="remove circle" content="Cancel" as={Link} to="/dashboard" />
      <Button.Or />
      <Button
        primary
        icon="save"
        content="Publish Paste"
        onClick={() => handleClick(setPublishingStatus, pasteId, history)}
      />
    </Button.Group>
  )
}

PasteActions.propTypes = propTypes

export default PasteActions
