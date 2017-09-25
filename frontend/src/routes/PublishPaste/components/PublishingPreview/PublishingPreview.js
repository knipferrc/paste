import { Loader, Segment } from 'semantic-ui-react'

import PropTypes from 'prop-types'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

const propTypes = {
  loading: PropTypes.bool,
  pasteContent: PropTypes.string
}

const Container = styled.div`margin: 5px;`

const PublishingPreview = ({ loading, pasteContent }) => {
  return (
    <div>
      {loading ? (
        <Loader active />
      ) : (
        <Container>
          <Segment piled padded>
            <ReactMarkdown source={pasteContent} />
          </Segment>
        </Container>
      )}
    </div>
  )
}

PublishingPreview.propTypes = propTypes

export default PublishingPreview
