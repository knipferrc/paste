import { Loader } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  isLoading: PropTypes.bool,
  timedOut: PropTypes.bool,
  pastDelay: PropTypes.bool,
  error: PropTypes.bool
}

const PageLoader = ({ isLoading, timedOut, pastDelay, error }) => {
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

PageLoader.propTypes = propTypes

export default PageLoader
