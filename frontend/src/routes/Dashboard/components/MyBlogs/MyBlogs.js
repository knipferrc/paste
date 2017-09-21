import { Button, Card } from 'semantic-ui-react'

import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  height: 100%;
  padding-top: 20px;
  margin-top: 40px;
`

const MyBlogs = () => {
  return (
    <Container>
      <Card.Group itemsPerRow={4} stackable doubling>
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <Card key={index}>
            <Card.Content>
              <Card.Header>Steve Sanders</Card.Header>
              <Card.Meta>Friends of Elliot</Card.Meta>
              <Card.Description>
                Steve wants to add you to the group{' '}
                <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button as={Link} to={`/dashboard/edit/${index}`} color="teal">
                  Edit
                </Button>
                <Button as={Link} to={`/dashboard/publish/${index}`}>
                  Publish
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Container>
  )
}

export default MyBlogs
