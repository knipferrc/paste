import { Button, Icon, Menu, Sidebar } from 'semantic-ui-react'
import React, { PureComponent } from 'react'

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions as layoutActions } from 'store/modules/DefaultLayout'
import { selectors as layoutSelectors } from 'store/modules/DefaultLayout'
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

class DefaultLayout extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    activeItem: PropTypes.string,
    setActiveItem: PropTypes.func,
    openSidebar: PropTypes.func,
    closeSidebar: PropTypes.func,
    open: PropTypes.bool,
  }

  handleItemClick = (e, { name }) => this.props.setActiveItem(name)

  render() {
    const { children, activeItem, openSidebar, closeSidebar, open } = this.props
    return (
      <div>
        <Menu size="large" style={{ margin: 0 }}>
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
              <Button as={Link} to="/login">
                Log in
              </Button>
              <Button as={Link} to="/signup" style={{ marginLeft: '0.5em' }}>
                Sign Up
              </Button>
            </Menu.Item>
          </DesktopMenuRight>
          <HamburgerMenu>
            <Icon
              onClick={open ? closeSidebar : openSidebar}
              size="large"
              name={open ? 'close' : 'sidebar'}
            />
          </HamburgerMenu>
          <Sidebar
            as={Menu}
            animation="overlay"
            width="thin"
            visible={open}
            icon="labeled"
            color="grey"
            vertical
            inverted
          >
            <Menu.Item name="home" as={Link} to="/" onClick={closeSidebar}>
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item
              name="login"
              as={Link}
              to="/login"
              onClick={closeSidebar}
            >
              <Icon name="vcard outline" />
              Login
            </Menu.Item>
            <Menu.Item
              name="home"
              as={Link}
              to="/signup"
              onClick={closeSidebar}
            >
              <Icon name="plus square" />
              SignUp
            </Menu.Item>
            <Menu.Item
              name="blogs"
              as={Link}
              to="/blogs"
              onClick={closeSidebar}
            >
              <Icon name="columns" />
              Blogs
            </Menu.Item>
          </Sidebar>
        </Menu>
        {children}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  activeItem: layoutSelectors.activeItem(state),
  open: layoutSelectors.open(state),
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setActiveItem: layoutActions.setActiveItem,
      openSidebar: layoutActions.openSidebar,
      closeSidebar: layoutActions.closeSidebar,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout)
