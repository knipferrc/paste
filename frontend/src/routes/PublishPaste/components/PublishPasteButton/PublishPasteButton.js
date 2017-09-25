import { Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  publishPaste: PropTypes.func,
  pasteId: PropTypes.string,
  history: PropTypes.object
}

const handleClick = (publishPaste, pasteId, history) => {
  try {
    publishPaste(pasteId)
    history.push('/dashboard')
  } catch (e) {
    return e
  }
}

const PublishPasteButton = ({ publishPaste, pasteId, history }) => {
  return (
    <Button
      color="blue"
      onClick={() => handleClick(publishPaste, pasteId, history)}
      fluid
      icon="external square"
      content="Publish Paste"
    />
  )
}

PublishPasteButton.propTypes = propTypes

export default PublishPasteButton
