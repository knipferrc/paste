import PropTypes from 'prop-types'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

const propTypes = {
  editorContent: PropTypes.string
}

const Container = styled.div`
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

const Preview = ({ editorContent }) => {
  return (
    <Container>
      <ReactMarkdown source={editorContent} />
    </Container>
  )
}

Preview.propTypes = propTypes

export default Preview
