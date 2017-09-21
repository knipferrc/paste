import { Grid, Segment } from 'semantic-ui-react'
import React, { PureComponent } from 'react'

import DefaultLayout from 'layouts/DefaultLayout'
import Editor from '../Editor'
import Preview from '../Preview'
import SaveBlogButton from '../SaveBlogButton'
import styled from 'styled-components'

const Container = styled.div`
  margin: 5px;
  margin-top: 45px;
`

export default class CreateBlogView extends PureComponent {
  state = {
    editorContent: ''
  }

  updateEditorContent = (event, data) => {
    this.setState({
      editorContent: data.value
    })
  }

  render() {
    const { editorContent } = this.state
    return (
      <DefaultLayout title="#Pastey! - Create Blog">
        <SaveBlogButton />
        <Container>
          <Segment.Group as={Grid} stackable horizontal columns={2}>
            <Grid.Column>
              <Editor
                updateEditorContent={this.updateEditorContent}
                editorContent={editorContent}
              />
            </Grid.Column>
            <Grid.Column>
              <Preview editorContent={editorContent} />
            </Grid.Column>
          </Segment.Group>
        </Container>
      </DefaultLayout>
    )
  }
}
