import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import React from 'react'

const PasteActions = () => {
  return (
    <Button.Group fluid>
      <Button icon="remove circle" content="Cancel" as={Link} to="/dashboard" />
      <Button.Or />
      <Button type="submit" primary icon="save" content="Save Paste" />
    </Button.Group>
  )
}

export default PasteActions
