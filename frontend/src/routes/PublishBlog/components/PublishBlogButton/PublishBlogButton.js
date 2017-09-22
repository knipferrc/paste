import { Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  publishBlog: PropTypes.func,
  blogId: PropTypes.string,
  history: PropTypes.object
}

const handleClick = (publishBlog, blogId, history) => {
  try {
    publishBlog(blogId)
    history.push('/dashboard')
  } catch (e) {
    return e
  }
}

const PublishBlogButton = ({ publishBlog, blogId, history }) => {
  return (
    <Button color="blue" onClick={() => handleClick(publishBlog, blogId, history)} fluid icon="external square" content="Publish Blog" />
  )
}

PublishBlogButton.propTypes = propTypes

export default PublishBlogButton
