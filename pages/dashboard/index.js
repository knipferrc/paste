import DefaultLayout from 'layouts/DefaultLayout'
import React from 'react'
import hoc from './hoc'

const Dashboard = () => (
  <DefaultLayout title="Dashboard">
    <h1>Dashboard</h1>
  </DefaultLayout>
)

export default hoc(Dashboard)
