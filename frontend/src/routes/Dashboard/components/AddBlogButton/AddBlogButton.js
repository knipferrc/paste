import React, { PureComponent } from 'react'

import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class AddBlogButton extends PureComponent {
  render() {
    return (
      <Button
        as={Link}
        to="/create-blog"
        primary
        fluid
        icon="plus"
        content="Create New Blog"
      />
    )
  }
}
