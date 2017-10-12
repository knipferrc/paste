import {
  ApolloClient,
  ApolloProvider,
  getDataFromTree
} from 'react-apollo'
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'

import App from 'client/routes'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import { StaticRouter } from 'react-router-dom'
import express from 'express'
import { graphql } from 'graphql'
import { print } from 'graphql/language/printer';
import { renderToString } from 'react-dom/server';
import schema from '../api'

const router = express.Router()
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

router.use(
  '/api',
  express.json(),
  graphqlExpress(req => ({ schema, context: { db: req.app.locals.db } }))
)

router.get('/graphiql', graphiqlExpress({ endpointURL: '/api' }))

router.get('/*', async (req, res) => {
  const apolloClient = new ApolloClient({
    networkInterface: {
      query: ({ query, variables, operationName }) =>
        graphql(schema, print(query), {}, {}, variables, operationName),
    },
    ssrMode: true
  })
  const sheet = new ServerStyleSheet()
  const context = {}

  const WrappedApp = (
    <ApolloProvider client={apolloClient}>
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  )

  await getDataFromTree(WrappedApp)

  const markup = renderToString(sheet.collectStyles(WrappedApp))

  const styleTags = sheet.getStyleTags()

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
              : `<script src="${assets.client.js}" defer crossorigin></script>`}
            <script>
              window.__APOLLO_STATE__ = ${JSON.stringify(apolloClient.getInitialState().data)}
            </script>
          </head>
          <body>
            <div id="root">${markup}</div>
          </body>
        </html>`
    )
  }
})

export default router
