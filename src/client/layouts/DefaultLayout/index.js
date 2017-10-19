import Navbar from 'client/components/Navbar'
import React from 'react'

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default DefaultLayout
