import CreatePasteButton from '../CreatePasteButton'
import DefaultLayout from 'layouts/DefaultLayout'
import { Grid } from 'semantic-ui-react'
import MyPastes from '../MyPastes'
import React from 'react'

const DashboardView = () => {
  return (
    <DefaultLayout title="#Pastey! - Dashboard">
      {({ user }) => (
        <Grid padded doubling relaxed>
          <Grid.Row>
            <Grid.Column>
              <CreatePasteButton />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <MyPastes user={user} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )}
    </DefaultLayout>
  )
}

export default DashboardView
