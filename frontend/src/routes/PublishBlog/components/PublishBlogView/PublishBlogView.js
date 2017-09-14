import { Button, Grid, Header } from 'semantic-ui-react'

import DefaultLayout from 'layouts/DefaultLayout'
import React from 'react'

const PublishBlogView = () => {
  return (
    <DefaultLayout title="#Pastey! - Publish Blog">
      <Grid container columns={2} doubling stackable padded>
        <Grid.Row>
          <Grid.Column>
            <Header as="h1" textAlign="center">
              Preview
            </Header>
            <div
              style={{
                background: 'white',
                height: 500,
                padding: 10,
                borderRadius: 3
              }}
            >
              <p>
                Cold-pressed ethical keffiyeh sustainable vape dreamcatcher
                proident bicycle rights. Chicharrones gastropub pickled et,
                bitters culpa green juice est viral asymmetrical ugh hoodie
                cliche. Cliche minim voluptate authentic mixtape. Before they
                sold out messenger bag asymmetrical quinoa chia street art. Aute
                aesthetic qui nulla meditation. Migas raclette non consequat in
                bespoke seitan beard selvage poke pickled next level church-key
                la croix. Keffiyeh poutine franzen ethical excepteur seitan.
                Aliquip gentrify sustainable, four loko gochujang blog tilde
                tote bag actually unicorn succulents nisi vexillologist.
                Gochujang labore chia, ut intelligentsia aliqua quinoa venmo
                mlkshk pop-up ea tofu laboris. Aesthetic sunt biodiesel kitsch
                pitchfork iceland succulents pug gluten-free franzen vaporware.
                Small batch laborum drinking vinegar celiac. Vexillologist
                celiac chillwave kombucha, hexagon ad est narwhal.
              </p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <Header as="h1" textAlign="center">
              Settings
            </Header>
            <Grid container centered>
              <Button>Publish</Button>
              <Button>Edit</Button>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </DefaultLayout>
  )
}

export default PublishBlogView
