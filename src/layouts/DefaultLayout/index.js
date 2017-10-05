import React, { PureComponent } from 'react'
import { gql, graphql } from 'react-apollo'

import Cookies from 'js-cookie'
import Drawer from 'components/Drawer'
import { Helmet } from 'react-helmet'
import { Loader } from 'semantic-ui-react'
import Navbar from 'components/Navbar'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Content = styled.div`
  padding-top: 62px;
`

class DefaultLayout extends PureComponent {
  static propTypes = {
    children: PropTypes.func,
    title: PropTypes.string,
    loading: PropTypes.bool,
    userProfile: PropTypes.object
  }

  state = {
    open: false
  }

  openDrawer = () => {
    this.setState({
      open: true
    })
  }

  closeDrawer = () => {
    this.setState({
      open: false
    })
  }

  render() {
    const { children, title, loading, userProfile } = this.props

    const { open } = this.state

    if (loading) {
      return <Loader active />
    }

    return (
      <div>
        <Helmet title={title} />
        <Navbar
          open={open}
          openDrawer={this.openDrawer}
          closeDrawer={this.closeDrawer}
          user={userProfile}
        />
        <Drawer user={userProfile} closeDrawer={this.closeDrawer} open={open} />
        <Content>{children({ user: userProfile })}</Content>
      </div>
    )
  }
}

const UserProfileQuery = gql`
  query userProfile($accessToken: String!) {
    userProfile(accessToken: $accessToken) {
      firstName
      lastName
      email
      _id
    }
  }
`

export default graphql(UserProfileQuery, {
  skip: () => !Cookies.get('accesstoken'),
  props: ({ data: { loading, userProfile } }) => ({
    loading,
    userProfile
  }),
  options: () => ({
    variables: {
      accessToken: Cookies.get('accesstoken')
    }
  })
})(DefaultLayout)
