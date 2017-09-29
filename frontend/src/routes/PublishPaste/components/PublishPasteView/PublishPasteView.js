import DefaultLayout from 'layouts/DefaultLayout'
import { Grid } from 'semantic-ui-react'
import PasteActions from '../PasteActions'
import PropTypes from 'prop-types'
import PublishingPreview from '../PublishingPreview'
import React from 'react'

const propTypes = {
  match: PropTypes.object,
  history: PropTypes.object
}

const PublishPasteView = ({ match, history }) => {
  return (
    <DefaultLayout title="#Pastey! - Publish Paste">
      {({ user }) => (
        <Grid padded doubling relaxed>
          <Grid.Row>
            <Grid.Column>
              <PasteActions
                userId={user._id}
                pasteId={match.params.id}
                history={history}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <PublishingPreview pasteId={match.params.id} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )}
    </DefaultLayout>
  )
}

PublishPasteView.propTypes = propTypes

export default PublishPasteView
