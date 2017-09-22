import { Loader } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import React from 'react'
import ReactMarkdown from 'react-markdown'

const propTypes = {
  loading: PropTypes.bool,
  blogContent: PropTypes.string
}

const PublishingPreview = ({ loading, blogContent}) => {
  return (
    <div>
     {loading ? <Loader active /> : <ReactMarkdown source={blogContent}/> }
    </div>
  )
}

PublishingPreview.propTypes = propTypes

export default PublishingPreview
