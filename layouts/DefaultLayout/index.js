import Meta from 'components/Meta'
import React from 'react'

const DefaultLayout = ({ title, children }) => (
  <div>
    <Meta title={title} />
    {children}
  </div>
)

export default DefaultLayout
