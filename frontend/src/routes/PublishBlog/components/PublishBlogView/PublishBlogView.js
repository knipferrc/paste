import DefaultLayout from 'layouts/DefaultLayout'
import PropTypes from 'prop-types'
import PublishBlogButton from '../PublishBlogButton'
import PublishingPreview from '../PublishingPreview'
import React from 'react'
import styled from 'styled-components'

const propTypes = {
  match: PropTypes.object,
  history: PropTypes.object
}

const Container = styled.div`
  margin: 5px;
`

const PublishBlogView = ({ match, history }) => {
  return (
    <DefaultLayout title="#Pastey! - Publish Blog">
      {({ user }) => (
        <Container>
          <PublishBlogButton userId={user._id} blogId={match.params.id} history={history} />
          <PublishingPreview blogId={match.params.id} />
        </Container>
      )}
    </DefaultLayout>
  )
}

PublishBlogView.propTypes = propTypes

export default PublishBlogView
