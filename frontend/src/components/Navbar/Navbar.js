import { Button, Dropdown, Icon, Menu } from 'semantic-ui-react'
import React, { PureComponent } from 'react'

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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

export default class Navbar extends PureComponent {
  static propTypes = {
    open: PropTypes.bool,
    openDrawer: PropTypes.func,
    closeDrawer: PropTypes.func,
    user: PropTypes.object
  }

  logout = () => {
    localStorage.removeItem('accessToken')
    window.location.href = '/'
  }

  render() {
    const { open, openDrawer, closeDrawer, user } = this.props
    return (
      <Menu inverted fixed="top" size="large" style={{ height: 62 }}>
        <Menu.Item header>#Pastey!</Menu.Item>
        <DesktopMenuLeft>
          {!user && (
            <Menu.Item as={Link} to="/">
              <Icon name="home" />
              Home
            </Menu.Item>
          )}
          <Menu.Item as={Link} to="/blogs">
            <Icon name="columns" />
            Blogs
          </Menu.Item>
          {user && (
            <Menu.Item as={Link} to="/dashboard">
              <Icon name="cubes" />
              Dashboard
            </Menu.Item>
          )}
        </DesktopMenuLeft>
        <DesktopMenuRight>
          <Menu.Item position="right">
            {!user ? (
              <Button.Group size="small">
                <Button as={Link} to="/login" color="blue">
                  <Icon name="sign in" />
                  Login
                </Button>
                <Button.Or />
                <Button as={Link} to="/register">
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
                  />
                  <Dropdown.Divider />
                  <Dropdown.Header content="My Account" />
                  <Dropdown.Item text="Settings" />
                  <Dropdown.Item onClick={this.logout} text="Logout" />
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
}
