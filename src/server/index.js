import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
  renderToStringWithData
} from 'react-apollo'

import App from 'client/routes'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import express from 'express'
import middleware from './middleware'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const server = express()
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .use(middleware())
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

    const context = {}
    const markup = await renderToStringWithData(
      <ApolloProvider client={apolloClient}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </ApolloProvider>
    )

    const initialState = apolloClient.store.getState()

    if (context.url) {
      res.redirect(context.url)
    } else {
      res.status(200).send(
        `<!doctype html>
          <html lang="">
            <head>
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta charSet='utf-8' />
              <title>#Pastey!</title>
              <meta name="user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height">
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
