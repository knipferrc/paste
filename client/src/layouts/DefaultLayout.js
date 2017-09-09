import React, { PureComponent } from 'react'

import Drawer from 'components/Drawer'
import Navbar from 'components/Navbar'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions as layoutActions } from 'store/modules/DefaultLayout'
import { selectors as layoutSelectors } from 'store/modules/DefaultLayout'

class DefaultLayout extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    activeItem: PropTypes.string,
    setActiveItem: PropTypes.func,
    openSidebar: PropTypes.func,
    closeSidebar: PropTypes.func,
    open: PropTypes.bool
  }

  render() {
    const {
      children,
      activeItem,
      openSidebar,
      closeSidebar,
      open,
      setActiveItem
    } = this.props
    return (
      <div>
        <Navbar
          activeItem={activeItem}
          open={open}
          openSidebar={openSidebar}
          closeSidebar={closeSidebar}
          setActiveItem={setActiveItem}
        />
        <Drawer closeSidebar={closeSidebar} open={open} />
        {children}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  activeItem: layoutSelectors.activeItem(state),
  open: layoutSelectors.open(state)
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setActiveItem: layoutActions.setActiveItem,
      openSidebar: layoutActions.openSidebar,
      closeSidebar: layoutActions.closeSidebar
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout)
