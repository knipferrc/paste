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
        type="submit"
        icon="save"
        content="Save Changes"
      />
    </Container>
  )
}

export default SavePasteButton
