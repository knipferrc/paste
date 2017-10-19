import db from './utils/db'
import express from 'express'
import middleware from './middleware'
import routes from './routes'

const server = express()

server
  .disable('x-powered-by')
  .use((req, res, next) => {
    server.locals.db = db
    next()
  })
  .use(middleware())
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .use(routes)

export default server
