import App from 'client/routes'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import express from 'express'
import middleware from './middleware'
import { renderToString } from 'react-dom/server'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const server = express()
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .use(middleware())
  .get('/*', (req, res) => {
    const context = {}
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    )
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
