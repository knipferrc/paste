import React, { PureComponent } from 'react'

import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  position: fixed;
  z-index: 100;
`

export default class AddBlogButton extends PureComponent {
  render() {
    return (
      <Container>
        <Button
          as={Link}
          to='/create-blog'
          style={{ borderRadius: 0 }}
          primary
          fluid
          icon="plus"
          content="Create New Blog"
        />
      </Container>
    )
  }
}
