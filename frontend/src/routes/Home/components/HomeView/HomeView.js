import CallOut from '../CallOut'
import DefaultLayout from 'layouts/DefaultLayout'
import Footer from '../Footer'
import Hero from '../Hero'
import LearnMore from '../LearnMore'
import React from 'react'
import RecentBlogs from '../RecentBlogs'

const HomeView = () => {
  return (
    <DefaultLayout title="#Pastey! - Home">
      {() => (
        <div>
          <Hero />
          <LearnMore />
          <CallOut />
          <RecentBlogs />
          <Footer />
        </div>
      )}
    </DefaultLayout>
  )
}

export default HomeView
