import DefaultLayout from 'layouts/DefaultLayout'
import React from 'react'
import { Tab } from 'semantic-ui-react'
import TopPastes from '../TopPastes'

const panes = [
  {
    menuItem: 'Top Pastes',
    render: () => (
      <Tab.Pane>
        <TopPastes />
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Recently Posted',
    render: () => (
      <Tab.Pane>
        <h1>Recently Posted Pastes here</h1>
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Tech',
    render: () => (
      <Tab.Pane>
        <h1>Tech pastes here</h1>
      </Tab.Pane>
    )
  }
]

const PastesView = () => {
  return (
    <DefaultLayout title="#Pastey! - Pastes">
      {() => <Tab panes={panes} />}
    </DefaultLayout>
  )
}

export default PastesView
