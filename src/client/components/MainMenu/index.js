import { branch, compose, pure, renderComponent } from 'recompose'
import { gql, graphql } from 'react-apollo'

import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'
import React from 'react'

// Define a very basic loading state component - you could make this
// a nice animation or something
const Loading = () => <h1>Loading</h1>

// Define an HoC that displays the Loading component instead of the
// wrapped component when props.data.loading is true
const displayLoadingState = branch(
  props => props.loading,
  renderComponent(Loading)
)

const MainMenu = () => (
  <ul className="nav">
    <li className="nav-item">
      <Link to="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link to="/pastes">Pastes</Link>
    </li>
    <li className="nav-item">
      <Link to="/login">Login</Link>
    </li>
    <li className="nav-item">
      <Link to="/register">Register</Link>
    </li>
    <li className="nav-item active">
      <a href="#!">Account</a>
      <ul className="nav">
        <li className="nav-item">
          <a href="#!">Profile</a>
        </li>
        <li className="nav-item">
          <a href="#!">Settings</a>
        </li>
        <li className="nav-item">
          <a href="#!">Logout</a>
        </li>
      </ul>
    </li>
  </ul>
)

const UserProfileQuery = gql`
  query userProfile($accessToken: String!) {
    userProfile(accessToken: $accessToken) {
      firstName
      lastName
      email
      id
    }
  }
`

const data = graphql(UserProfileQuery, {
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
})

export default compose(data, displayLoadingState, pure)(MainMenu)
