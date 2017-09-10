import { Editor, EditorState } from 'draft-js'
import React, { PureComponent } from 'react'

class TextEditor extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { editorState: EditorState.createEmpty() }
    this.onChange = editorState => this.setState({ editorState })
  }
  render() {
    return (
      <Editor editorState={this.state.editorState} onChange={this.onChange} />
    )
  }
}

export default TextEditor
