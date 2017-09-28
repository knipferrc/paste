import { Button, Dropdown, Icon, Menu } from 'semantic-ui-react'

import Dashboard from 'routes/Dashboard'
import Documentation from 'routes/Documentation'
import Home from 'routes/Home'
import { Link } from 'react-router-dom'
import Login from 'routes/Login'
import Pastes from 'routes/Pastes'
import PropTypes from 'prop-types'
import React from 'react'
import Register from 'routes/Register'
import styled from 'styled-components'

const propTypes = {
  open: PropTypes.bool,
  openDrawer: PropTypes.func,
  closeDrawer: PropTypes.func,
  user: PropTypes.object
}

const DesktopMenuLeft = styled.div`
  display: flex;
  @media (max-width: 762px) {
    display: none;
  }
`

const DesktopMenuRight = styled.div`
  display: flex;
  margin-left: auto;
  @media (max-width: 762px) {
    display: none;
  }
`

const HamburgerMenu = styled.div`
  display: none;
  @media (max-width: 762px) {
    display: initial;
    display: flex;
    align-items: center;
    margin-right: 10px;
    margin-left: auto;
    color: white;
  }
`

const logout = () => {
  localStorage.removeItem('accessToken')
  window.location.href = '/'
}

const Navbar = ({ open, openDrawer, closeDrawer, user }) => {
  return (
    <Menu inverted fixed="top" size="large" style={{ height: 62 }}>
      <Menu.Item header>#Pastey!</Menu.Item>
      <DesktopMenuLeft>
        {!user && (
          <Menu.Item as={Link} to="/" onMouseOver={() => Home.preload()}>
            <Icon name="home" />
            Home
          </Menu.Item>
        )}
        <Menu.Item as={Link} to="/pastes" onMouseOver={() => Pastes.preload()}>
          <Icon name="columns" />
          Pastes
        </Menu.Item>
        {user && (
          <Menu.Item
            as={Link}
            to="/dashboard"
            onMouseOver={() => Dashboard.preload()}
          >
            <Icon name="cubes" />
            Dashboard
          </Menu.Item>
        )}
      </DesktopMenuLeft>
      <DesktopMenuRight>
        <Menu.Item position="right">
          {!user ? (
            <Button.Group size="small">
              <Button
                as={Link}
                to="/login"
                color="blue"
                onMouseOver={() => Login.preload()}
              >
                <Icon name="sign in" />
                Login
              </Button>
              <Button.Or />
              <Button
                as={Link}
                to="/register"
                onMouseOver={() => Register.preload()}
              >
                <Icon name="signup" />
                Register
              </Button>
            </Button.Group>
          ) : (
            <Dropdown
              text={user.email}
              floating
              labeled
              pointing
              button
              icon="user"
              className="icon"
            >
              <Dropdown.Menu>
                <Dropdown.Header content="Help" />
                <Dropdown.Divider />
                <Dropdown.Item
                  text="Documentation"
                  as={Link}
                  to="/documentation"
                  onMouseOver={() => Documentation.preload()}
                />
                <Dropdown.Divider />
                <Dropdown.Header content="My Account" />
                <Dropdown.Item text="Settings" />
                <Dropdown.Item onClick={logout} text="Logout" />
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Menu.Item>
      </DesktopMenuRight>
      <HamburgerMenu>
        <Icon
          onClick={open ? closeDrawer : openDrawer}
          size="large"
          name={open ? 'close' : 'sidebar'}
        />
      </HamburgerMenu>
    </Menu>
  )
}

Navbar.propTypes = propTypes

export default Navbar
