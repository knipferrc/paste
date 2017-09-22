import { Form, Grid, Segment } from 'semantic-ui-react'

import BlogInfo from '../../components/BlogInfo'
import Editor from '../../components/Editor'
import { Formik } from 'formik'
import Preview from '../../components/Preview'
import PropTypes from 'prop-types'
import React from 'react'
import SaveBlogButton from '../../components/SaveBlogButton'

const propTypes = {
  addBlog: PropTypes.func,
  user: PropTypes.object
}

const CreateBlogForm = ({ addBlog, user }) => {
  console.log(user)
  return (
    <Formik
      initialValues={{
        editorContent: '',
        blogTitle: '',
        blogCategory: '',
        blogDescription: ''
      }}
      validate={values => {
        let errors = {}
        if (!values.blogTitle) {
          errors.blogTitle = 'Required'
        }
        if (!values.blogCategory) {
          errors.blogCategory = 'Required'
        }
        if (!values.blogDescription) {
          errors.blogDescription = 'Required'
        }
        return errors
      }}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          setSubmitting(true)
          await addBlog(
            values.blogTitle,
            values.blogCategory,
            values.blogDescription,
            values.editorContent,
            user._id
          )
        } catch (e) {
          setSubmitting(false)
        }
      }}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldValue
      }) => (
        <Form loading={isSubmitting} size="large" onSubmit={handleSubmit}>
          <Segment.Group as={Grid} stackable horizontal>
            <Grid.Row columns={1}>
              <Grid.Column>
                <SaveBlogButton />
                <BlogInfo
                  blogTitle={values.blogTitle}
                  blogCategory={values.blogCategory}
                  blogDescription={values.blogDescription}
                  updateField={handleChange}
                  setFieldValue={setFieldValue}
                  errors={errors}
                  touched={touched}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Editor
                  updateEditorContent={handleChange}
                  editorContent={values.editorContent}
                />
              </Grid.Column>
              <Grid.Column>
                <Preview editorContent={values.editorContent} />
              </Grid.Column>
            </Grid.Row>
          </Segment.Group>
        </Form>
      )}
    />
  )
}

CreateBlogForm.propTypes = propTypes

export default CreateBlogForm
