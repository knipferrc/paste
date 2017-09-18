import React, { PureComponent } from 'react'

import EditorControls from './EditorControls'
import styled from 'styled-components'

const EditorContainer = styled.div`
  margin: 10px;
  background: white;
  padding: 10px;
`

export default class TextEditor extends PureComponent {
  render() {
    return (
      <div>
        <EditorControls />
        <EditorContainer>
          Edit here
        </EditorContainer>
      </div>
    )
  }
}

