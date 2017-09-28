import { Button, Card, Icon, Loader, Message } from 'semantic-ui-react'

import EditPaste from 'routes/EditPaste'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import PublishPaste from 'routes/PublishPaste'
import React from 'react'

const propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool,
  myPastes: PropTypes.array,
  setPublishingStatus: PropTypes.func
}

const MyPastes = ({ loading, myPastes, setPublishingStatus }) => {
  if (loading) {
    return <Loader active />
  }

  return (
    <div>
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
                    onMouseOver={() => EditPaste.preload()}
                    color="teal"
                  >
                    Edit
                  </Button>
                  {paste.status === 'unpublished' ? (
                    <Button
                      as={Link}
                      to={`/dashboard/publish/${paste._id}`}
                      onMouseOver={() => PublishPaste.preload()}
                    >
                      Publish
                    </Button>
                  ) : (
                    <Button
                      onClick={() =>
                        setPublishingStatus(paste._id, 'unpublished')}
                    >
                      Unpublish
                    </Button>
                  )}
                </div>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      )}
    </div>
  )
}

MyPastes.propTypes = propTypes

export default MyPastes
