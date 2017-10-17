import DefaultLayout from 'layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'
import checkLoggedIn from 'lib/checkLoggedIn'
import hoc from './hoc'
import redirect from 'lib/redirect'

const DashboardView = ({ loggedInUser }) => (
  <DefaultLayout title="Dashboard" user={loggedInUser}>
    <h1>Dashboard</h1>
  </DefaultLayout>
)

DashboardView.getInitialProps = async (context, apolloClient) => {
  const { loggedInUser } = await checkLoggedIn(context, apolloClient)
  if (!loggedInUser.id) {
    // If not signed in, send them somewhere more useful
    redirect(context, '/login')
  }

  return { loggedInUser }
}

DashboardView.propTypes = {
  loggedInUser: PropTypes.object
}

export default hoc(DashboardView)
