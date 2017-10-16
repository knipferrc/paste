import { LocaleProvider } from 'antd'
import Meta from 'components/Meta'
import React from 'react'
import enUS from 'antd/lib/locale-provider/en_US'

const DefaultLayout = ({ title, children }) => (
  <LocaleProvider locale={enUS}>
    <div>
      <Meta title={title} />
      {children}
    </div>
  </LocaleProvider>
)

export default DefaultLayout
