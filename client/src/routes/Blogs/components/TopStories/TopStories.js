import { Button, Card, Header, Segment } from 'semantic-ui-react'

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  height: 100%;
  padding-top: 10px;
`

const items = [
  {
    header: 'Project Report - April',
    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%',
    extra: <Button fluid color="green">Read More</Button>
  },
  {
    header: 'Project Report - May',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
    extra: <Button fluid color="green">Read More</Button>
  },
  {
    header: 'Project Report - June',
    description: 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    meta: 'ROI: 27%',
    extra: <Button fluid color="green">Read More</Button>
  },
]

const TopStories = () => {
  return (
    <Container>
      <Segment>
      <Header textAlign="center" as="h1">Top Stories</Header>
      <Card.Group itemsPerRow={3} stackable doubling items={items} />
    </Segment>
  </Container>
  )
}

export default TopStories
