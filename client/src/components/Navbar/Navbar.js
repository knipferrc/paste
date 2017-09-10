import { Button, Icon, Menu } from 'semantic-ui-react'
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
    activeItem: PropTypes.string,
    open: PropTypes.bool,
    openSidebar: PropTypes.func,
    closeSidebar: PropTypes.func,
    setActiveItem: PropTypes.func
  }

  render() {
    const { open, openSidebar, closeSidebar } = this.props
    return (
      <Menu inverted fixed="top" size="large" style={{ height: 62 }}>
        <Menu.Item header>#Pastey!</Menu.Item>
        <DesktopMenuLeft>
          <Menu.Item as={Link} to="/">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item as={Link} to="/blogs">
            <Icon name="columns" />
            Blogs
          </Menu.Item>
          <Menu.Item as={Link} to="/create">
            <Icon name="lab" />
            Create
          </Menu.Item>
        </DesktopMenuLeft>
        <DesktopMenuRight>
          <Menu.Item position="right">
            <Button.Group size="small">
              <Button as={Link} to="/login" color="blue">
                <Icon name="vcard outline" />
                Login
              </Button>
              <Button.Or />
              <Button as={Link} to="signup">
                <Icon name="plus square" />
                SignUp
              </Button>
            </Button.Group>
          </Menu.Item>
        </DesktopMenuRight>
        <HamburgerMenu>
          <Icon
            onClick={open ? closeSidebar : openSidebar}
            size="large"
            name={open ? 'close' : 'sidebar'}
          />
        </HamburgerMenu>
      </Menu>
    )
  }
}
