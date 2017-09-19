import React, { PureComponent } from 'react'
import { compose, gql, graphql } from 'react-apollo'

import Drawer from 'components/Drawer'
import { Helmet } from 'react-helmet'
import { Loader } from 'semantic-ui-react'
import Navbar from 'components/Navbar'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions as layoutActions } from 'store/modules/DefaultLayout'
import { selectors as layoutSelectors } from 'store/modules/DefaultLayout'
import styled from 'styled-components'

const Content = styled.div`padding-top: 62px;`

class DefaultLayout extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    openSidebar: PropTypes.func,
    closeSidebar: PropTypes.func,
    open: PropTypes.bool,
    loading: PropTypes.bool,
    userProfile: PropTypes.object
  }

  render() {
    const {
      children,
      title,
      openSidebar,
      closeSidebar,
      open,
      loading,
      userProfile
    } = this.props

    if (loading) {
      return <Loader active />
    }

    return (
      <div>
        <Helmet title={title} />
        <Navbar
          open={open}
          openSidebar={openSidebar}
          closeSidebar={closeSidebar}
          user={userProfile}
        />
        <Drawer user={userProfile} closeSidebar={closeSidebar} open={open} />
        <Content>{children}</Content>
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

const UserProfileQuery = gql`
  query userProfile($accessToken: String!) {
    userProfile(accessToken: $accessToken) {
      firstName
      lastName
      email
    }
  }
`

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(UserProfileQuery, {
    skip: () => !localStorage.getItem('accessToken'),
    props: ({ data: { loading, userProfile } }) => ({
      loading,
      userProfile
    }),
    options: () => ({
      variables: {
        accessToken: localStorage.getItem('accessToken')
      }
    })
  })
)(DefaultLayout)
