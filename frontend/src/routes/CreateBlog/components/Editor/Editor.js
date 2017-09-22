import { Header, TextArea } from 'semantic-ui-react'

import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  editorContent: PropTypes.string,
  updateEditorContent: PropTypes.func
}

const Editor = ({ editorContent, updateEditorContent }) => {
  return (
    <div>
      <Header textAlign="center">Blog Editor</Header>
      <TextArea
        name="editorContent"
        value={editorContent}
        onChange={(event, data) => updateEditorContent(event, data)}
        placeholder="Create your blog here"
        style={{ minHeight: 400 }}
        autoHeight
      />
    </div>
  )
}

Editor.propTypes = propTypes

export default Editor
