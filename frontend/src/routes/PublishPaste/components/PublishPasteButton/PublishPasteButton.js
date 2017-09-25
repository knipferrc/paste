import { Button } from 'semantic-ui-react'
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

const PublishPasteButton = ({ setPublishingStatus, pasteId, history }) => {
  return (
    <Button
      color="blue"
      onClick={() => handleClick(setPublishingStatus, pasteId, history)}
      fluid
      icon="external square"
      content="Publish Paste"
    />
  )
}

PublishPasteButton.propTypes = propTypes

export default PublishPasteButton
