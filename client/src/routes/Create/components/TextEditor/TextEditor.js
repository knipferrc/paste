import { Editor, State } from 'slate'
import React, { PureComponent } from 'react'

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

class TextEditor extends PureComponent{
  state = {
    state: initialState
  }

  onChange = ({ state }) => {
    this.setState({ state })
  }

  render() {
    return (
      <Editor
        state={this.state.state}
        onChange={this.onChange}
      />
    )
  }
}

export default TextEditor
