import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import { StaticRouter } from 'react-router-dom'
import api from './api'
import db from './utils/db'
import express from 'express'
import middleware from './middleware'
import { minify } from 'html-minifier'
import { renderRoutes } from 'react-router-config'
import { renderToString } from 'react-dom/server'
import routes from 'client/routes'

const server = express()

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

server
  .disable('x-powered-by')
  .use((req, res, next) => {
    server.locals.db = db
    next()
  })
  .use(express.json())
  .use(middleware())
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .use('/api', api)
  .get('/*', (req, res) => {
    const context = {}
    const sheet = new ServerStyleSheet()

    const markup = renderToString(
      sheet.collectStyles(
        <StaticRouter context={context} location={req.url}>
          {renderRoutes(routes)}
        </StaticRouter>
      )
    )

    const styleTags = sheet.getStyleTags()

    if (context.url) {
      res.redirect(context.url)
    } else {
      res.status(200).send(
        minify(
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
                <link rel="manifest" href="/manifest.json">
                <meta name="msapplication-tap-highlight" content="no">
                <meta name="mobile-web-app-capable" content="yes">
                <meta name="application-name" content="#Pastey!">
                <meta name="apple-mobile-web-app-capable" content="yes">
                <meta name="apple-mobile-web-app-status-bar-style" content="black">
                <meta name="apple-mobile-web-app-title" content="#Pastey!">
                <meta name="msapplication-TileColor" content="#5755d9">
                <meta property="og:url" content="https://pastey.now.sh">
                <meta property="og:type" content="website">
                <meta property="og:title" content="#Pastey!">
                <meta property="og:description" content="Simple and elegant pasting">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
                ${styleTags}
                ${assets.client.css
                  ? `<link rel="stylesheet" href="${assets.client.css}">`
                  : ''}
                ${process.env.NODE_ENV === 'production'
                  ? `<script src="${assets.client.js}" defer></script>`
                  : `<script src="${assets.client
                      .js}" defer crossorigin></script>`}
              </head>
              <body>
                <div id="root">${markup}</div>
              </body>
          </html>`,
          {
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true
          }
        )
      )
      res.end()
    }
  })

export default server
