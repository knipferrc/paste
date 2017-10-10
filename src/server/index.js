import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
  renderToStringWithData
} from 'react-apollo'

import App from 'client/routes'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import { StaticRouter } from 'react-router-dom'
import express from 'express'
import middleware from './middleware'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const server = express()
server
  .disable('x-powered-by')
  .use(middleware())
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', async (req, res) => {
    const apolloClient = new ApolloClient({
      ssrMode: true,
      networkInterface: createNetworkInterface({
        uri:
          process.env.NODE_ENV === 'production'
            ? 'https://pastey.now.sh/api'
            : 'http://localhost:3000/api'
      })
    })
    const sheet = new ServerStyleSheet()
    const context = {}
    const markup = await renderToStringWithData(
      sheet.collectStyles(
        <ApolloProvider client={apolloClient}>
          <StaticRouter context={context} location={req.url}>
            <App />
          </StaticRouter>
        </ApolloProvider>
      )
    )

    const styleTags = sheet.getStyleTags()
    const initialState = apolloClient.store.getState()

    if (context.url) {
      res.redirect(context.url)
    } else {
      res.status(200).send(
        `<!doctype html>
          <html lang="en">
            <head>
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta charSet='utf-8' />
              <title>#Pastey!</title>
              <meta name="viewport" content="user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height">
              <meta name="description" content="Simple and elegant pasting">
              <meta name="keywords" content="react, paste, pastey, 2017, blog, blogging, facebook">

              <meta name="theme-color" content="#5755d9">

              <!-- Web Application Manifest -->
              <link rel="manifest" href="/manifest.json">

              <!-- Disable tap highlight on IE -->
              <meta name="msapplication-tap-highlight" content="no">

              <!-- Add to homescreen for Chrome on Android -->
              <meta name="mobile-web-app-capable" content="yes">
              <meta name="application-name" content="#Pastey!">

              <!-- Add to homescreen for Safari on iOS -->
              <meta name="apple-mobile-web-app-capable" content="yes">
              <meta name="apple-mobile-web-app-status-bar-style" content="black">
              <meta name="apple-mobile-web-app-title" content="#Pastey!">

              <!-- Tile icon for Win8 (144x144 + tile color) -->
              <meta name="msapplication-TileColor" content="#5755d9">
              <meta property="og:url" content="https://pastey.now.sh">
              <meta property="og:type" content="website">
              <meta property="og:title" content="#Pastey!">
              <meta property="og:description" content="Simple and elegant pasting">

              ${styleTags}
              ${assets.client.css
                ? `<link rel="stylesheet" href="${assets.client.css}">`
                : ''}
              ${process.env.NODE_ENV === 'production'
                ? `<script src="${assets.client.js}" defer></script>`
                : `<script src="${assets.client
                    .js}" defer crossorigin></script>`}
              <script>
                window.__APOLLO_STATE__ = ${JSON.stringify(
                  initialState
                ).replace(/</g, '\\u003c')}
              </script>
            </head>
            <body>
              <div id="root">${markup}</div>
            </body>
          </html>`
      )
    }
  })

export default server
