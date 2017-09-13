import { Grid, Message } from 'semantic-ui-react'

import DefaultLayout from 'layouts/DefaultLayout'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
`

const NotFound = () => {
  return (

    <DefaultLayout>
      <Container>
      <Grid centered padded>
      <Message
      style={{ maxWidth: 400 }}
      icon='warning'
      header='404 Page Not Found!!!'
      content='Sorry, but the page you are looking for does not exist'
      error
    />
      </Grid>
      </Container>
    </DefaultLayout>

  )
}

export default NotFound
