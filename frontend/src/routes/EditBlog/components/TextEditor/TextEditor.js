import { Editor, EditorState } from 'draft-js'
import React, { PureComponent } from 'react'

import EditorControls from './EditorControls'
import styled from 'styled-components'

const EditorContainer = styled.div`
  margin: 10px;
  background: white;
  padding: 10px;
`

export default class TextEditor extends PureComponent {
  state = {
    editorState: EditorState.createEmpty()
  }

  onChange = editorState => {
    this.setState({
      editorState
    })
  }

  render() {
    const { editorState } = this.state
    return (
      <div>
        <EditorControls />
        <EditorContainer>
          <Editor editorState={editorState} onChange={this.onChange} />
        </EditorContainer>
      </div>
    )
  }
}

