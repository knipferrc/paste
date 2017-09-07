import { gql, graphql } from 'react-apollo'

import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  loading: PropTypes.bool,
  version: PropTypes.string,
}

const HomeView = ({ loading, version }) => {
  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>{version}</h1>
    </div>
  )
}

const VersionQuery = gql`
  query {
    version
  }
`

HomeView.propTypes = propTypes

export default graphql(VersionQuery, {
  props: ({ data: { loading, version } }) => ({
    loading,
    version,
  }),
})(HomeView)
