import { Form, Loader, Message, Segment, TextArea } from 'semantic-ui-react'

import { Formik } from 'formik'
import PropTypes from 'prop-types'
import React from 'react'
import SavePasteButton from '../../components/SavePasteButton'

const propTypes = {
  history: PropTypes.object,
  pasteContent: PropTypes.string,
  loading: PropTypes.bool,
  updatePasteContent: PropTypes.func,
  pasteId: PropTypes.string
}

const EditPasteForm = ({
  history,
  loading,
  pasteContent,
  pasteId,
  updatePasteContent
}) => {
  if (loading) {
    return <Loader active />
  }

  return (
    <Formik
      initialValues={{
        pasteContent: pasteContent
      }}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        try {
          setSubmitting(true)
          await updatePasteContent(pasteId, values.pasteContent)
          history.push('/dashboard')
        } catch (e) {
          setSubmitting(false)
          setErrors({ submitError: e.graphQLErrors[0].message })
        }
      }}
      render={({
        values,
        errors,
        handleChange,
        handleSubmit,
        isSubmitting
      }) => (
        <Form loading={isSubmitting} size="large" onSubmit={handleSubmit}>
          <SavePasteButton />
          <Segment>
            {errors.submitError && (
              <Message negative>
                <Message.Header>{errors.submitError}</Message.Header>
              </Message>
            )}
            <TextArea
              name="pasteContent"
              value={values.pasteContent}
              onChange={handleChange}
              placeholder="Edit Paste"
              style={{ minHeight: 400 }}
              autoHeight
            />
          </Segment>
        </Form>
      )}
    />
  )
}

EditPasteForm.propTypes = propTypes

export default EditPasteForm
