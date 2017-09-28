import { Header } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

const propTypes = {
  pasteContent: PropTypes.string
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

const PastePreview = ({ pasteContent }) => {
  return (
    <div>
      <Header textAlign="center">Paste Preview</Header>
      <PreviewContainer>
        <ReactMarkdown source={pasteContent} />
      </PreviewContainer>
      </div>
  )
}

PastePreview.propTypes = propTypes

export default PastePreview
