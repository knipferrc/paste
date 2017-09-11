import React, { PureComponent } from 'react'

import { Button } from 'semantic-ui-react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
`

export default class EditorControls extends PureComponent {
  render() {
    return (
      <ButtonContainer>
        <Button.Group size="small" primary>
          <Button icon="bold" />
          <Button icon="italic" />
          <Button icon="align left" />
          <Button icon="align center" />
          <Button icon="align right" />
          <Button icon="unordered list" />
          <Button icon="ordered list" />
          <Button icon="unlinkify" />
          <Button icon="attach" />
        </Button.Group>
      </ButtonContainer>
    )
  }
}
