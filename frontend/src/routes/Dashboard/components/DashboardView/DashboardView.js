import AddBlogButton from '../AddBlogButton'
import DefaultLayout from 'layouts/DefaultLayout'
import MyBlogs from '../MyBlogs'
import React from 'react'
import { Segment } from 'semantic-ui-react'
import styled from 'styled-components'

const Container = styled.div`margin: 5px;`

const DashboardView = () => {
  return (
    <DefaultLayout title="#Pastey! - Dashboard">
      {() => (
        <Container>
          <Segment>
            <AddBlogButton />
            <MyBlogs />
          </Segment>
        </Container>
      )}
    </DefaultLayout>
  )
}

export default DashboardView
