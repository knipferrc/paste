import { Button, Card, Icon } from 'semantic-ui-react'
import { gql, graphql } from 'react-apollo'

import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const propTypes = {
  loading: PropTypes.bool,
  version: PropTypes.string
}

const Container = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  height: 100%;
  padding-top: 10px;
`

const ExtraContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const description = [
  'Amy is a violinist with 2 years experience in the wedding industry.',
  'She enjoys the outdoors and currently resides in upstate New York.'
].join(' ')

const TopStories = ({ loading, version }) => {
  return (
    <Container>
      <Card.Group itemsPerRow={4} stackable>
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <Card key={index}>
            <Card.Content header="About Amy" />
            <Card.Content description={description} />
            <Card.Content extra>
              <ExtraContent>
                <div>
                  <Icon name="user" />
                  {loading ? 'loading...' : `${version} views`}
                </div>
                <Button color="teal">Read More</Button>
              </ExtraContent>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Container>
  )
}

TopStories.propTypes = propTypes

const StoryQuery = gql`
  query {
    version
  }
`

export default graphql(StoryQuery, {
  props: ({ data: { loading, version } }) => ({
    loading, version
  })
})(TopStories)
