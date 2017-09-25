import { Loader } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import React from 'react'
import ReactMarkdown from 'react-markdown'

const propTypes = {
  loading: PropTypes.bool,
  pasteContent: PropTypes.string
}

const PublishingPreview = ({ loading, pasteContent }) => {
  return (
    <div>
      {loading ? <Loader active /> : <ReactMarkdown source={pasteContent} />}
    </div>
  )
}

PublishingPreview.propTypes = propTypes

export default PublishingPreview
