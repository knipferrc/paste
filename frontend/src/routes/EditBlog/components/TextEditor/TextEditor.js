import { Form, TextArea } from 'semantic-ui-react'
import React, { PureComponent } from 'react'

import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

const EditorContainer = styled.div`
  margin: 10px;
  background: white;
  padding: 10px;
`

export default class TextEditor extends PureComponent {
  state = {
    editorContent: ''
  }

  handleChange = (event, data) => {
    this.setState({
      editorContent: data.value
    })
  }
  render() {
    return (
      <div>
        <EditorContainer>
          <Form>
            <TextArea
              onChange={(event, data) => this.handleChange(event, data)}
              value={this.state.editorContent}
              placeholder="Create your blog here"
              style={{ minHeight: 250 }}
            />
          </Form>
          <ReactMarkdown source={this.state.editorContent} />
        </EditorContainer>
      </div>
    )
  }
}
