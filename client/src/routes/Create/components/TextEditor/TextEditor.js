import React, { PureComponent } from 'react'

import { Editor } from 'slate-react'
import EditorControls from './EditorControls'
import { State } from 'slate'
import styled from 'styled-components'

const EditorContainer = styled.div`
  margin: 10px;
  background: white;
  padding: 10px;
`

const initialState = State.fromJSON({
  document: {
    nodes: [
      {
        kind: 'block',
        type: 'paragraph',
        nodes: [
          {
            kind: 'text',
            ranges: [
              {
                text: 'Create your blog here!!!'
              }
            ]
          }
        ]
      }
    ]
  }
})

class TextEditor extends PureComponent {
  state = {
    state: initialState
  }

  onChange = ({ state }) => {
    this.setState({ state })
  }

  render() {
    return (
      <div>
        <EditorControls />
        <EditorContainer>
          <Editor state={this.state.state} onChange={this.onChange} />
        </EditorContainer>
      </div>
    )
  }
}

export default TextEditor
