import { Icon, Menu, Sidebar } from 'semantic-ui-react'
import React, { PureComponent } from 'react'

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class Drawer extends PureComponent {
  static propTypes = {
    closeSidebar: PropTypes.func,
    open: PropTypes.bool
  }

  render() {
    const { closeSidebar, open } = this.props
    return (
      <Sidebar
        as={Menu}
        animation="overlay"
        width="thin"
        visible={open}
        icon="labeled"
        vertical
      >
        <Menu.Item name="home" as={Link} to="/" onClick={closeSidebar}>
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item name="login" as={Link} to="/login" onClick={closeSidebar}>
          <Icon name="vcard outline" />
          Login
        </Menu.Item>
        <Menu.Item name="home" as={Link} to="/signup" onClick={closeSidebar}>
          <Icon name="plus square" />
          SignUp
        </Menu.Item>
        <Menu.Item name="blogs" as={Link} to="/blogs" onClick={closeSidebar}>
          <Icon name="columns" />
          Blogs
        </Menu.Item>
        <Menu.Item
          name="blogs"
          as={Link}
          to="/dashboard"
          onClick={closeSidebar}
        >
          <Icon name="cubes" />
          Dashboard
        </Menu.Item>
      </Sidebar>
    )
  }
}
