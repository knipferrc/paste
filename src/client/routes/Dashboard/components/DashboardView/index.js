import DefaultLayout from 'client/layouts/DefaultLayout'
import React from 'react'
import hoc from './hoc'

const DashboardView = () => {
  return (
    <DefaultLayout>
      <div>Dashboard</div>
    </DefaultLayout>
  )
}

export default hoc(DashboardView)
