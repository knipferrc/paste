import { Close, Drawer, Flex, Heading, NavLink, Toolbar } from 'rebass'
import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions as layoutActions } from 'store/modules/DefaultLayout'
import { selectors as layoutSelectors } from 'store/modules/DefaultLayout'

class DefaultLayout extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    open: PropTypes.bool,
    openDrawer: PropTypes.func,
    closeDrawer: PropTypes.func,
  }

  render() {
    const { children, open, openDrawer, closeDrawer } = this.props
    return (
      <div>
        <Toolbar>
          <NavLink onClick={openDrawer}>#Pastey!</NavLink>
          <NavLink ml="auto">Home</NavLink>
          <NavLink>Create Post</NavLink>
        </Toolbar>
        <Drawer
          open={open}
          p={2}
          color="white"
          bg="gray9"
          style={{ width: 220 }}
        >
          <Heading f={2}>
            <Flex justify="space-between" align="center">
              <span>Main Menu</span>
              <Close onClick={closeDrawer} />
            </Flex>
          </Heading>
        </Drawer>
        {children}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  open: layoutSelectors.open(state),
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      openDrawer: layoutActions.openDrawer,
      closeDrawer: layoutActions.closeDrawer,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout)
