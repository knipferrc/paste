import { Form, TextArea } from 'semantic-ui-react'

import React from 'react'

const PasteEditor = () => {
  return (
    <div>
      <Form>
        <TextArea
          name="pasteContent"
          value="Some Content"
          placeholder="Edit Paste"
          style={{ minHeight: 400 }}
          autoHeight
        />
      </Form>
    </div>
  )
}

export default PasteEditor
