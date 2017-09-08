import CallOut from '../CallOut'
import DefaultLayout from 'layouts/DefaultLayout'
import Footer from '../Footer'
import Hero from '../Hero'
import LearnMore from '../LearnMore'
import React from 'react'
import RecentBlogs from '../RecentBlogs'

const HomeView = () => {
  return (
    <DefaultLayout>
      <Hero />
      <LearnMore />
      <CallOut />
      <RecentBlogs />
      <Footer />
    </DefaultLayout>
  )
}

export default HomeView
