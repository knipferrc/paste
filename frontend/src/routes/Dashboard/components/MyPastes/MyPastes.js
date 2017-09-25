import { Button, Card, Icon, Loader, Message } from 'semantic-ui-react'

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool,
  myPastes: PropTypes.array
}

const Container = styled.div`
  height: 100%;
  margin-top: 20px;
`

const MyPastes = ({ loading, myPastes }) => {
  if (loading) {
    return <Loader active />
  }

  return (
    <Container>
      {myPastes.length === 0 ? (
        <Message icon info>
          <Icon name="info" />You have not created any pastes
        </Message>
      ) : (
        <Card.Group itemsPerRow={4} stackable doubling>
          {myPastes.map(paste => (
            <Card
              key={paste._id}
              color={paste.status === 'unpublished' ? 'yellow' : 'green'}
            >
              <Card.Content>
                <Card.Header>{paste.title}</Card.Header>
                <Card.Meta>Status: {paste.status}</Card.Meta>
                <Card.Description>{paste.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button
                    as={Link}
                    to={`/dashboard/edit/${paste._id}`}
                    color="teal"
                  >
                    Edit
                  </Button>
                  <Button as={Link} to={`/dashboard/publish/${paste._id}`}>
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

MyPastes.propTypes = propTypes

export default MyPastes
