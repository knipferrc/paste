import DefaultLayout from 'layouts/DefaultLayout'
import React from 'react'
import { Tab } from 'semantic-ui-react'
import TopBlogs from '../TopBlogs'

const panes = [
  {
    menuItem: 'Top Blogs',
    render: () => (
      <Tab.Pane>
        <TopBlogs />
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Recently Posted',
    render: () => (
      <Tab.Pane>
        <h1>Recent Posted Blogs here</h1>
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Tech',
    render: () => (
      <Tab.Pane>
        <h1>Tech blogs here</h1>
      </Tab.Pane>
    )
  }
]

const BlogsView = () => {
  return (
    <DefaultLayout title="#Pastey! - Blogs">
      <Tab panes={panes} />
    </DefaultLayout>
  )
}

export default BlogsView
