import { Button, Card, Icon, Loader, Message } from 'semantic-ui-react'

import { Link } from 'react-router-dom'
import MyBlogsQuery from '../../queries/myBlogs'
import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'react-apollo'
import styled from 'styled-components'

const propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool,
  myBlogs: PropTypes.array
}

const Container = styled.div`
  height: 100%;
  margin-top: 20px;
`

const MyBlogs = ({ loading, myBlogs }) => {
  if (loading) {
    return <Loader active />
  }

  return (
    <Container>
      {myBlogs.length === 0 ? (
        <Message icon info>
          <Icon name="info" />You have not created any blogs
        </Message>
      ) : (
        <Card.Group itemsPerRow={4} stackable doubling>
          {myBlogs.map((blog, index) => (
            <Card key={index}>
              <Card.Content>
                <Card.Header>{blog.title}</Card.Header>
                <Card.Meta>{blog.status}</Card.Meta>
                <Card.Description>{blog.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button
                    as={Link}
                    to={`/dashboard/edit/${blog._id}`}
                    color="teal"
                  >
                    Edit
                  </Button>
                  <Button as={Link} to={`/dashboard/publish/${blog._id}`}>
                    Publish
                  </Button>
                </div>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      )}
    </Container>
  )
}

MyBlogs.propTypes = propTypes

export default graphql(MyBlogsQuery, {
  props: ({ data: { loading, myBlogs } }) => ({
    loading,
    myBlogs
  }),
  options: props => ({
    variables: {
      userId: props.user._id
    }
  })
})(MyBlogs)
