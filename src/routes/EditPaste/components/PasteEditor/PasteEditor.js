import { Header, TextArea } from 'semantic-ui-react'

import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  pasteContent: PropTypes.string,
  handleChange: PropTypes.func
}

const PasteEditor = ({ pasteContent, handleChange }) => {
  return (
    <div>
      <Header textAlign="center">Paste Editor</Header>
      <TextArea
        name="pasteContent"
        value={pasteContent}
        onChange={handleChange}
        placeholder="Edit Paste"
        style={{ minHeight: 400 }}
        autoHeight
      />
    </div>
  )
}

PasteEditor.propTypes = propTypes

export default PasteEditor
