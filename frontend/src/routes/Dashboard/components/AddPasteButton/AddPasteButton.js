import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import React from 'react'

const AddPasteButton = () => {
  return (
    <Button
      as={Link}
      to="/create-paste"
      primary
      fluid
      icon="plus"
      content="Create New Paste"
    />
  )
}

export default AddPasteButton
