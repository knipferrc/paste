import { Button, Container, Divider, Header, Segment } from 'semantic-ui-react'

import React from 'react'

const RecentBlogs = () => {
  return (
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: '2em' }}>
          Why react is the greatest javascript library of 2017
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Instead of focusing on content creation and hard work, we have learned
          how to master the art of doing nothing by providing massive amounts of
          whitespace and generic content that can seem massive, monolithic and
          worth your attention.
        </p>
        <Button as="a" size="large">
          Read More
        </Button>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href="#!">Case Studies</a>
        </Divider>
        <Header as="h3" style={{ fontSize: '2em' }}>
          Have you heard of styled-components?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur
          filler content, but its really true. It took years of gene splicing
          and combinatory DNA research, but our bananas can really dance.
        </p>
        <Button as="a" size="large">
          I&apos;m Still Quite Interested
        </Button>
      </Container>
    </Segment>
  )
}

export default RecentBlogs
