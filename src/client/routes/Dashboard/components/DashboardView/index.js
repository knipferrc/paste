import DefaultLayout from 'client/layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'
import hoc from './hoc'

const DashboardView = ({ loading, myPastes }) => {
  if (loading) {
    return (
      <DefaultLayout>
        <i className="fa fa-spinner fa-spin fa-5x" />
      </DefaultLayout>
    )
  }

  return (
    <DefaultLayout>
      <pre>{JSON.stringify(myPastes, null, 2)}</pre>
    </DefaultLayout>
  )
}

DashboardView.propTypes = {
  loading: PropTypes.bool,
  myPastes: PropTypes.array
}

export default hoc(DashboardView)
