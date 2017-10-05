import { Button } from 'semantic-ui-react'
import CreatePaste from 'routes/CreatePaste'
import { Link } from 'react-router-dom'
import React from 'react'

const CreatePasteButton = () => {
  return (
    <Button
      as={Link}
      onMouseOver={() => CreatePaste.preload()}
      to="/create-paste"
      primary
      fluid
      icon="plus"
      content="Create New Paste"
    />
  )
}

export default CreatePasteButton
