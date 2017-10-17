import Head from 'next/head'
import PropTypes from 'prop-types'
import React from 'react'

const Meta = ({ title }) => (
  <Head>
    <title>{`#Pastey! - ${title}`}</title>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height"
    />
    <meta name="description" content="Simple and elegant pasting" />
    <meta
      name="keywords"
      content="react, paste, pastey, 2017, blog, blogging, facebook"
    />
    <meta name="theme-color" content="#5755d9" />
    <meta name="msapplication-tap-highlight" content="no" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="application-name" content="#Pastey!" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="apple-mobile-web-app-title" content="#Pastey!" />
    <meta name="msapplication-TileColor" content="#5755d9" />
    <meta property="og:url" content="https://pastey.now.sh" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="#Pastey!" />
    <meta property="og:description" content="Simple and elegant pasting" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/antd/2.13.6/antd.min.css"
    />
  </Head>
)

Meta.propTypes = {
  title: PropTypes.string
}

export default Meta
