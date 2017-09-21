import CreateBlogForm from '../../forms/CreateBlogForm'
import DefaultLayout from 'layouts/DefaultLayout'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`margin: 5px;`

const CreateBlogView = () => {
  return (
    <DefaultLayout title="#Pastey! - Create Blog">
      <Container>
        <CreateBlogForm />
      </Container>
    </DefaultLayout>
  )
}

export default CreateBlogView
