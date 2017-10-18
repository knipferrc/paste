import React, { PureComponent } from 'react'

import { LocaleProvider } from 'antd'
import Meta from 'components/Meta'
import Navbar from 'components/Navbar'
import PageLoader from 'components/PageLoader'
import PropTypes from 'prop-types'
import enUS from 'antd/lib/locale-provider/en_US'

export default ComposedComponent => {
  return class WithDefaultLayout extends PureComponent {
    static propTypes = {
      loading: PropTypes.bool,
      userProfile: PropTypes.object
    }

    render() {
      const { loading, userProfile } = this.props
      return (
        <LocaleProvider locale={enUS}>
          <div>
            <Meta />
            {loading ? (
              <PageLoader />
            ) : (
              <div>
                <Navbar user={userProfile} />
                <div className="content-container">
                  <ComposedComponent {...this.props} />
                </div>
              </div>
            )}
            <style jsx>{`
              .content-container {
                padding-top: 55px;
              }
            `}</style>
          </div>
        </LocaleProvider>
      )
    }
  }
}
