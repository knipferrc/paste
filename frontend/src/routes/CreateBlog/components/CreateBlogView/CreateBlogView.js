import CreateBlogForm from '../../forms/CreateBlogForm'
import DefaultLayout from 'layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const propTypes = {
  addBlog: PropTypes.func
}

const Container = styled.div`margin: 5px;`

const CreateBlogView = ({ addBlog }) => {
  return (
    <DefaultLayout title="#Pastey! - Create Blog">
      {({ user }) => (
        <Container>
          <CreateBlogForm addBlog={addBlog} user={user} />
        </Container>
      )}
    </DefaultLayout>
  )
}

CreateBlogView.propTypes = propTypes

export default CreateBlogView
