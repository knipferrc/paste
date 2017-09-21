import React, { PureComponent } from 'react'

import { Button } from 'semantic-ui-react'

export default class SaveBlogButton extends PureComponent {
  render() {
    return (
      <Button type="submit" primary fluid icon="save" content="Save Blog" />
    )
  }
}
