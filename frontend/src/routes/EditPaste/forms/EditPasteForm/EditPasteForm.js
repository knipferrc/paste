import { Form, Grid, Loader, Message } from 'semantic-ui-react'

import { Formik } from 'formik'
import PasteActions from '../../components/PasteActions'
import PasteEditor from '../../components/PasteEditor'
import PastePreview from '../../components/PastePreview'
import PropTypes from 'prop-types'
import React from 'react'

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
          <Grid padded doubling relaxed stackable>
            <Grid.Row>
              <Grid.Column>
                <PasteActions />
              </Grid.Column>
            </Grid.Row>
            {errors.submitError && (
              <Grid.Row>
                <Grid.Column>
                  <Message negative>
                    <Message.Header>{errors.submitError}</Message.Header>
                  </Message>
                </Grid.Column>
              </Grid.Row>
            )}
            <Grid.Row columns={2}>
              <Grid.Column>
                <PasteEditor
                  pasteContent={values.pasteContent}
                  handleChange={handleChange}
                />
              </Grid.Column>
              <Grid.Column>
                <PastePreview pasteContent={values.pasteContent} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      )}
    />
  )
}

EditPasteForm.propTypes = propTypes

export default EditPasteForm
