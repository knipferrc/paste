import React, { PureComponent } from 'react'

import { Loader } from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default class PageLoader extends PureComponent {
  static propTypes = {
    isLoading: PropTypes.bool,
    timedOut: PropTypes.bool,
    pastDelay: PropTypes.bool,
    error: PropTypes.bool
  }
  render() {
    const { isLoading, timedOut, pastDelay, error } = this.props
    if (isLoading) {
      // While our other component is loading...
      if (timedOut) {
        // In case we've timed out loading our other component.
        return <div>Loader timed out!</div>
      } else if (pastDelay) {
        // Display a loading screen after a set delay.
        return <Loader active />
      } else {
        // Don't flash "Loading..." when we don't need to.
        return null
      }
    } else if (error) {
      // If we aren't loading, maybe
      return <div>Error! Component failed to load</div>
    } else {
      // This case shouldn't happen... but we'll return null anyways.
      return null
    }
  }
}
