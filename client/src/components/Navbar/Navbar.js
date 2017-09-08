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
  }
`

export default class Navbar extends PureComponent {
  static propTypes = {
    activeItem: PropTypes.string,
    open: PropTypes.bool,
    openSidebar: PropTypes.func,
    closeSidebar: PropTypes.func,
    setActiveItem: PropTypes.func,
  }

  handleItemClick = (e, { name }) => this.props.setActiveItem(name)

  render() {
    const { activeItem, open, openSidebar, closeSidebar } = this.props
    return (
      <Menu secondary size="large" style={{ margin: 0 }}>
        <Menu.Item header>#Pastey!</Menu.Item>
        <DesktopMenuLeft>
          <Menu.Item
            name="home"
            as={Link}
            to="/"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>
          <Menu.Item
            name="blogs"
            as={Link}
            to="/blogs"
            active={activeItem === 'blogs'}
            onClick={this.handleItemClick}
          >
            Blogs
          </Menu.Item>
        </DesktopMenuLeft>
        <DesktopMenuRight>
          <Menu.Item position="right">
            <Button.Group size="small">
              <Button as={Link} to="/login" color="blue">
                Login
              </Button>
              <Button.Or />
              <Button as={Link} to="signup">
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
