import { Form, Message } from 'semantic-ui-react'

import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  pasteTitle: PropTypes.string,
  pasteDescription: PropTypes.string,
  pasteCategory: PropTypes.string,
  updateField: PropTypes.func,
  setFieldValue: PropTypes.func,
  errors: PropTypes.object,
  touched: PropTypes.object
}

const options = [
  { key: 'tech', text: 'Tech', value: 'tech' },
  { key: 'business', text: 'Business', value: 'business' }
]

const PasteInfo = ({
  pasteTitle,
  pasteCategory,
  pasteDescription,
  updateField,
  setFieldValue,
  errors,
  touched
}) => {
  return (
    <Message>
      <Form.Group widths="equal">
        <Form.Input
          value={pasteTitle}
          onChange={updateField}
          error={touched.pasteTitle && errors.pasteTitle ? true : false}
          name="pasteTitle"
          label="Title"
          placeholder="Paste Title"
        />
        <Form.Select
          value={pasteCategory}
          onChange={(e, { name, value }) => setFieldValue(name, value)}
          error={touched.pasteCategory && errors.pasteCategory ? true : false}
          name="pasteCategory"
          label="Category"
          options={options}
          placeholder="Paste Category"
        />
      </Form.Group>
      <Form.TextArea
        value={pasteDescription}
        onChange={updateField}
        error={touched.pasteDescription && errors.pasteDescription ? true : false}
        name="pasteDescription"
        label="Description"
        placeholder="Describe Your Paste"
      />
    </Message>
  )
}

PasteInfo.propTypes = propTypes

export default PasteInfo
