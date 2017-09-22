import CreateBlogForm from '../../forms/CreateBlogForm'
import DefaultLayout from 'layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const propTypes = {
  history: PropTypes.object
}

const Container = styled.div`margin: 5px;`

const CreateBlogView = ({ history }) => {
  return (
    <DefaultLayout title="#Pastey! - Create Blog">
      {({ user }) => (
        <Container>
          <CreateBlogForm user={user} history={history} />
        </Container>
      )}
    </DefaultLayout>
  )
}

CreateBlogView.propTypes = propTypes

export default CreateBlogView
