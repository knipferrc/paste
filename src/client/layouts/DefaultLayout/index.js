import Navbar from 'client/components/Navbar'
import PropTypes from 'prop-types'
import React from 'react'

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node
}

export default DefaultLayout
