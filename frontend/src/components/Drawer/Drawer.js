import { Icon, Menu, Sidebar } from 'semantic-ui-react'
import React, { PureComponent } from 'react'

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class Drawer extends PureComponent {
  static propTypes = {
    closeDrawer: PropTypes.func,
    open: PropTypes.bool,
    user: PropTypes.object
  }

  logout = () => {
    localStorage.removeItem('accessToken')
    window.location.href = '/'
  }

  render() {
    const { closeDrawer, open, user } = this.props
    return (
      <Sidebar
        as={Menu}
        animation="overlay"
        style={{ width: 200 }}
        visible={open}
        icon="labeled"
        vertical
      >
        {user && (
          <Menu.Item name="account" as={Link} to="/" onClick={closeDrawer}>
            <Icon name="user" />
            {user.email}
          </Menu.Item>
        )}
        {!user && (
          <Menu.Item name="home" as={Link} to="/" onClick={closeDrawer}>
            <Icon name="home" />
            Home
          </Menu.Item>
        )}
        {!user && (
          <Menu.Item name="login" as={Link} to="/login" onClick={closeDrawer}>
            <Icon name="sign in" />
            Login
          </Menu.Item>
        )}
        {!user && (
          <Menu.Item
            name="register"
            as={Link}
            to="/register"
            onClick={closeDrawer}
          >
            <Icon name="signup" />
            Register
          </Menu.Item>
        )}
        {user && (
          <Menu.Item name="blogs" as={Link} to="/blogs" onClick={closeDrawer}>
            <Icon name="columns" />
            Blogs
          </Menu.Item>
        )}
        {user && (
          <Menu.Item
            name="dashboard"
            as={Link}
            to="/dashboard"
            onClick={closeDrawer}
          >
            <Icon name="cubes" />
            Dashboard
          </Menu.Item>
        )}
        {user && (
          <Menu.Item
            name="documentation"
            as={Link}
            to="/documentation"
            onClick={closeDrawer}
          >
            <Icon name="file text outline" />
            Documentation
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
