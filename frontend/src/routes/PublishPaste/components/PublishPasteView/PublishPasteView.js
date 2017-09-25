import DefaultLayout from 'layouts/DefaultLayout'
import PropTypes from 'prop-types'
import PublishPasteButton from '../PublishPasteButton'
import PublishingPreview from '../PublishingPreview'
import React from 'react'
import styled from 'styled-components'

const propTypes = {
  match: PropTypes.object,
  history: PropTypes.object
}

const Container = styled.div`margin: 5px;`

const PublishPasteView = ({ match, history }) => {
  return (
    <DefaultLayout title="#Pastey! - Publish Paste">
      {({ user }) => (
        <Container>
          <PublishPasteButton
            userId={user._id}
            pasteId={match.params.id}
            history={history}
          />
          <PublishingPreview pasteId={match.params.id} />
        </Container>
      )}
    </DefaultLayout>
  )
}

PublishPasteView.propTypes = propTypes

export default PublishPasteView
