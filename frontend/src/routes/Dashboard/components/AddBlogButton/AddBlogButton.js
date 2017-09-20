import React, { PureComponent } from 'react'

import { Button } from 'semantic-ui-react'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
`

export default class AddBlogButton extends PureComponent {
  render() {
    return (
      <Container>
        <Button style={{ borderRadius: 0 }} primary fluid icon="plus" content="Create New Blog" />
      </Container>
    )
  }
}
