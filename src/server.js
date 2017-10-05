import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'

import App from './components/App'
import { MongoClient } from 'mongodb'
import React from 'react'
import Routes from './routes'
import { ServerStyleSheet } from 'styled-components'
import { StaticRouter } from 'react-router-dom'
import bodyParser from 'body-parser'
import compression from 'compression'
import express from 'express'
import helmet from 'helmet'
import { renderToString } from 'react-dom/server'
import schema from './api'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const server = express()

const setupDB = async (req, res, next) => {
  const db = await MongoClient.connect(process.env.RAZZLE_MONGO_URI)
  server.locals.db = db
  next()
}

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .use(helmet())
  .use(compression())
  .use(setupDB)
  .use('/api', bodyParser.json(), graphqlExpress(req => ({ schema, context: { db: req.app.locals.db } })))
  .get('/graphiql', graphiqlExpress({ endpointURL: '/api' }))
  .get('/*', (req, res) => {
    const context = {}
    const sheet = new ServerStyleSheet()
    const markup = renderToString(sheet.collectStyles(
      <App>
        <StaticRouter context={context} location={req.url}>
          <Routes />
        </StaticRouter>
      </App>
    ))

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
            <meta name="viewport" content="width=device-width, initial-scale=1">
            ${assets.client.css
              ? `<link rel="stylesheet" href="${assets.client.css}">`
              : ''}
            ${process.env.NODE_ENV === 'production'
              ? `<script src="${assets.client.js}" defer></script>`
              : `<script src="${assets.client.js}" defer crossorigin></script>`}
          </head>
          <body>
            <div id="root">${markup}</div>
          </body>
        </html>`
      )
    }
  })

export default server
