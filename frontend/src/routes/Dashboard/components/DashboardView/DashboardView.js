import AddBlogButton from '../AddBlogButton'
import DefaultLayout from 'layouts/DefaultLayout'
import MyBlogs from '../MyBlogs'
import React from 'react'

const DashboardView = () => {
  return (
    <DefaultLayout title="#Pastey! - Dashboard">
      <AddBlogButton />
      <MyBlogs />
    </DefaultLayout>
  )
}

export default DashboardView
