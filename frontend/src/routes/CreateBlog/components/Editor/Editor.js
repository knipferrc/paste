import PropTypes from 'prop-types'
import React from 'react'
import { TextArea } from 'semantic-ui-react'

const propTypes = {
  editorContent: PropTypes.string,
  updateEditorContent: PropTypes.func
}

const Editor = ({ editorContent, updateEditorContent }) => {
  return (
    <TextArea
      name="editorContent"
      value={editorContent}
      onChange={(event, data) => updateEditorContent(event, data)}
      placeholder="Create your blog here"
      style={{ minHeight: 400 }}
      autoHeight
    />
  )
}

Editor.propTypes = propTypes

export default Editor
