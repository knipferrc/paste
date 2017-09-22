import AddBlogButton from '../AddBlogButton'
import DefaultLayout from 'layouts/DefaultLayout'
import MyBlogs from '../MyBlogs'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`margin: 5px;`

const DashboardView = () => {
  return (
    <DefaultLayout title="#Pastey! - Dashboard">
      {({ user }) => (
        <Container>
          <AddBlogButton />
          <MyBlogs user={user} />
        </Container>
      )}
    </DefaultLayout>
  )
}

export default DashboardView
