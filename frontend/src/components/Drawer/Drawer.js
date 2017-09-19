import { Icon, Menu, Sidebar } from 'semantic-ui-react'
import React, { PureComponent } from 'react'

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class Drawer extends PureComponent {
  static propTypes = {
    closeSidebar: PropTypes.func,
    open: PropTypes.bool,
    user: PropTypes.object
  }

  logout = () => {
    localStorage.removeItem('accessToken')
    window.location.href = '/'
  }

  render() {
    const { closeSidebar, open, user } = this.props
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
        {!user && (
          <Menu.Item name="login" as={Link} to="/login" onClick={closeSidebar}>
            <Icon name="sign in" />
            Login
          </Menu.Item>
        )}
        {!user && (
          <Menu.Item
            name="home"
            as={Link}
            to="/register"
            onClick={closeSidebar}
          >
            <Icon name="signup" />
            Register
          </Menu.Item>
        )}
        {user && (
          <Menu.Item name="blogs" as={Link} to="/blogs" onClick={closeSidebar}>
            <Icon name="columns" />
            Blogs
          </Menu.Item>
        )}
        {user && (
          <Menu.Item
            name="blogs"
            as={Link}
            to="/dashboard"
            onClick={closeSidebar}
          >
            <Icon name="cubes" />
            Dashboard
          </Menu.Item>
        )}
        {user && (
          <Menu.Item name="logout" onClick={this.logout}>
            <Icon name="sign out" />
            Logout
          </Menu.Item>
        )}
      </Sidebar>
    )
  }
}
