import { LocaleProvider } from 'antd'
import Meta from 'components/Meta'
import Navbar from 'components/Navbar'
import React from 'react'
import enUS from 'antd/lib/locale-provider/en_US'

const DefaultLayout = ({ title, children }) => (
  <LocaleProvider locale={enUS}>
    <div>
      <Meta title={title} />
      <Navbar />
      <div className="content-container">
        {children}
      </div>
      <style jsx>{`
      .content-container {
        padding-top: 55px;
      }
    `}</style>
    </div>
  </LocaleProvider>
)

export default DefaultLayout
