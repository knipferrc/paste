import DefaultLayout from 'layouts/DefaultLayout'
import React from 'react'
import { Tab } from 'semantic-ui-react'
import TopStories from '../TopStories'

const panes = [
  {
    menuItem: 'Top Blogs',
    render: () => (
      <Tab.Pane>
        <TopStories />
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Recently Posted',
    render: () => (
      <Tab.Pane>
        <TopStories />
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Tech',
    render: () => (
      <Tab.Pane>
        <TopStories />
      </Tab.Pane>
    )
  }
]

const BlogsView = () => {
  return (
    <DefaultLayout>
      <Tab panes={panes} />
    </DefaultLayout>
  )
}

export default BlogsView
