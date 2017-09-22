import { Form, Message } from 'semantic-ui-react'

import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  blogTitle: PropTypes.string,
  blogCategory: PropTypes.string,
  blogDescription: PropTypes.string,
  updateField: PropTypes.func,
  setFieldValue: PropTypes.func,
  errors: PropTypes.object,
  touched: PropTypes.object
}

const options = [
  { key: 'tech', text: 'Tech', value: 'tech' },
  { key: 'business', text: 'Business', value: 'business' }
]

const BlogInfo = ({
  blogTitle,
  blogCategory,
  blogDescription,
  updateField,
  setFieldValue,
  errors,
  touched
}) => {
  return (
    <Message>
      <Form.Group widths="equal">
        <Form.Input
          value={blogTitle}
          onChange={updateField}
          error={touched.blogTitle && errors.blogTitle ? true : false}
          name="blogTitle"
          label="Title"
          placeholder="Blog Title"
        />
        <Form.Select
          value={blogCategory}
          onChange={(e, { name, value }) => setFieldValue(name, value)}
          error={touched.blogCategory && errors.blogCategory ? true : false}
          name="blogCategory"
          label="Category"
          options={options}
          placeholder="Blog Category"
        />
      </Form.Group>
      <Form.TextArea
        value={blogDescription}
        onChange={updateField}
        error={touched.blogDescription && errors.blogDescription ? true : false}
        name="blogDescription"
        label="Description"
        placeholder="Describe Your Blog"
      />
    </Message>
  )
}

BlogInfo.propTypes = propTypes

export default BlogInfo
