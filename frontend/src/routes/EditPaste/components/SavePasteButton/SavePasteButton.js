import { Button } from 'semantic-ui-react'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`margin-bottom: 10px;`

const SavePasteButton = () => {
  return (
    <Container>
      <Button
        color="blue"
        fluid
        icon="external square"
        content="Save Changes"
      />
    </Container>
  )
}

export default SavePasteButton
