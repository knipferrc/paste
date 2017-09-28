import { Icon, Menu, Sidebar } from 'semantic-ui-react'

import Dashboard from 'routes/Dashboard'
import Documentation from 'routes/Documentation'
import Home from 'routes/Home'
import { Link } from 'react-router-dom'
import Login from 'routes/Login'
import Pastes from 'routes/Pastes'
import PropTypes from 'prop-types'
import React from 'react'
import Register from 'routes/Register'

const propTypes = {
  closeDrawer: PropTypes.func,
  open: PropTypes.bool,
  user: PropTypes.object
}

const logout = () => {
  localStorage.removeItem('accessToken')
  window.location.href = '/'
}

const Drawer = ({ closeDrawer, open, user }) => {
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
        <Menu.Item
          name="account"
          as={Link}
          to="/"
          onClick={closeDrawer}
          onMouseOver={() => Home.preload()}
        >
          <Icon name="user" />
          {user.email}
        </Menu.Item>
      )}
      {!user && (
        <Menu.Item
          name="home"
          as={Link}
          to="/"
          onClick={closeDrawer}
          onMouseOver={() => Home.preload()}
        >
          <Icon name="home" />
          Home
        </Menu.Item>
      )}
      <Menu.Item
        name="pastes"
        as={Link}
        to="/pastes"
        onClick={closeDrawer}
        onMouseOver={() => Pastes.preload()}
      >
        <Icon name="columns" />
        Pastes
      </Menu.Item>
      {!user && (
        <Menu.Item
          name="login"
          as={Link}
          to="/login"
          onClick={closeDrawer}
          onMouseOver={() => Login.preload()}
        >
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
          onMouseOver={() => Register.preload()}
        >
          <Icon name="signup" />
          Register
        </Menu.Item>
      )}
      {user && (
        <Menu.Item
          name="dashboard"
          as={Link}
          to="/dashboard"
          onClick={closeDrawer}
          onMouseOver={() => Dashboard.preload()}
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
          onMouseOver={() => Documentation.preload()}
        >
          <Icon name="file text outline" />
          Documentation
        </Menu.Item>
      )}
      {user && (
        <Menu.Item name="logout" onClick={logout}>
          <Icon name="sign out" />
          Logout
        </Menu.Item>
      )}
    </Sidebar>
  )
}

Drawer.propTypes = propTypes

export default Drawer
