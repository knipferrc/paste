import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react'

import { Link } from 'react-router-dom'
import React from 'react'

const Hero = () => {
  return (
    <Segment
      color="teal"
      inverted
      textAlign="center"
      style={{ minHeight: 700, padding: '1em 0em' }}
      vertical
    >
      <Container text>
        <Header
          as="h1"
          content="#Pastey!"
          inverted
          style={{
            fontSize: '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '3em'
          }}
        />
        <Header
          as="h2"
          content="Welcome to the greatest blog platform on the planet"
          inverted
          style={{ fontSize: '1.7em', fontWeight: 'normal' }}
        />
        <Button as={Link} to="/login" inverted size="huge">
          Get Started
          <Icon name="right arrow" />
        </Button>
      </Container>
    </Segment>
  )
}

export default Hero
