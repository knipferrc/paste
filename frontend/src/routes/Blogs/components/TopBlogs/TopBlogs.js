import { Button, Card } from 'semantic-ui-react'

import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  height: 100%;
  padding-top: 10px;
`

const TopBlogs = () => {
  return (
    <Container>
      <Card.Group itemsPerRow={4} stackable doubling>
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <Card key={index}>
            <Card.Content>
              <Card.Header>FrontEnd Frameworks 2017</Card.Header>
              <Card.Meta>
                Total Views: 1
              </Card.Meta>
              <Card.Description>
                Deciding on what frontend framework to use today can be a
                daunting task. Betwee React, Vue, Angular, Preact and More, it
                becomes very difficult to decide what framework to choose.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button as={Link} to={`/blogs/${index}`} color="teal" fluid>
                Read More
              </Button>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Container>
  )
}

export default TopBlogs
