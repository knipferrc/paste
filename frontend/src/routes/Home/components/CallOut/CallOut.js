import { Grid, Header, Segment } from 'semantic-ui-react'

import React from 'react'

const CallOut = () => {
  return (
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              &quot;What a Company&quot;
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              That is what they all say about us
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              &quot;I created this because I couldnt find what I wanted in a
              blog platform.&quot;
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <b>Tyler</b> CEO Of #Pastey!
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default CallOut
