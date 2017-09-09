import React, { PureComponent } from 'react'

import Drawer from 'components/Drawer'
import Navbar from 'components/Navbar'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions as layoutActions } from 'store/modules/DefaultLayout'
import { selectors as layoutSelectors } from 'store/modules/DefaultLayout'
import styled from 'styled-components'

const Content = styled.div`
  padding-top: 62px;
`

class DefaultLayout extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    openSidebar: PropTypes.func,
    closeSidebar: PropTypes.func,
    open: PropTypes.bool
  }

  render() {
    const {
      children,
      openSidebar,
      closeSidebar,
      open,
    } = this.props
    return (
      <div>
        <Navbar
          open={open}
          openSidebar={openSidebar}
          closeSidebar={closeSidebar}
        />
        <Drawer closeSidebar={closeSidebar} open={open} />
        <Content>
        {children}
        </Content>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  open: layoutSelectors.open(state)
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      openSidebar: layoutActions.openSidebar,
      closeSidebar: layoutActions.closeSidebar
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout)
