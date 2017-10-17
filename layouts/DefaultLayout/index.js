import { LocaleProvider } from 'antd'
import Meta from 'components/Meta'
import Navbar from 'components/Navbar'
import PropTypes from 'prop-types'
import React from 'react'
import enUS from 'antd/lib/locale-provider/en_US'
import hoc from './hoc'

const DefaultLayout = ({ title, children, loading, userProfile }) => (
  <LocaleProvider locale={enUS}>
    <div>
      <Meta title={title} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Navbar user={userProfile} />
          <div className="content-container">{children}</div>
          <style jsx>{`
            .content-container {
              padding-top: 55px;
            }
          `}</style>
        </div>
      )}
    </div>
  </LocaleProvider>
)

DefaultLayout.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool,
  userProfile: PropTypes.object,
  children: PropTypes.node
}

export default hoc(DefaultLayout)
