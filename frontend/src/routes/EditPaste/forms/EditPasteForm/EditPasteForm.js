import {
  Form,
  Grid,
  Header,
  Loader,
  Message,
  TextArea
} from 'semantic-ui-react'

import { Formik } from 'formik'
import PropTypes from 'prop-types'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import SavePasteButton from '../../components/SavePasteButton'
import styled from 'styled-components'

const propTypes = {
  history: PropTypes.object,
  pasteContent: PropTypes.string,
  loading: PropTypes.bool,
  updatePasteContent: PropTypes.func,
  pasteId: PropTypes.string
}

const PreviewContainer = styled.div`
  min-height: 400px;
  height: 400px;
  vertical-align: top;
  background: #fff;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 0.28571429rem;
  color: rgba(0, 0, 0, 0.87);
  transition: color 0.1s ease, border-color 0.1s ease;
  padding: 0.78571429em 1em;
`

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
                <SavePasteButton />
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
                <Header textAlign="center">Paste Editor</Header>
                <TextArea
                  name="pasteContent"
                  value={values.pasteContent}
                  onChange={handleChange}
                  placeholder="Edit Paste"
                  style={{ minHeight: 400 }}
                  autoHeight
                />
              </Grid.Column>
              <Grid.Column>
                <Header textAlign="center">Paste Preview</Header>
                <PreviewContainer>
                  <ReactMarkdown source={values.pasteContent} />
                </PreviewContainer>
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
