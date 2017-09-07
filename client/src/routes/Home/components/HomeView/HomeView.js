import { gql, graphql } from 'react-apollo'

import DefaultLayout from 'layouts/DefaultLayout'
import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  loading: PropTypes.bool,
  version: PropTypes.string,
}

const HomeView = ({ loading, version }) => {
  return (
    <DefaultLayout>
      {loading ? <p>Loading...</p> : <h1>{version}</h1>}
    </DefaultLayout>
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
