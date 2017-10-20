import React, { PureComponent } from 'react'

import DefaultLayout from 'client/layouts/DefaultLayout'
import axios from 'axios'

export default class HomeView extends PureComponent {
  state = {
    loading: false,
    user: {}
  }

  async componentDidMount() {
    this.setState({
      loading: true
    })
    const { data } = await axios.get('/api/users/me')

    this.setState({
      user: data,
      loading: false
    })
  }

  render() {
    if (this.state.loading) {
      return <p>Loading...</p>
    }

    return <DefaultLayout>{this.state.user.username}</DefaultLayout>
  }
}
