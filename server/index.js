const express = require('express')
const next = require('next')
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express')
const compression = require('compression')
const helmet = require('helmet')
const hpp = require('hpp')
const dotenv = require('dotenv')

const schema = require('./api')
const db = require('./utils/db')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

dotenv.config()

app.prepare().then(() => {
  const server = express()
  server.use(helmet())
  server.use(hpp())
  server.use(compression())
  server.use(
    '/api',
    express.json(),
    graphqlExpress(req => ({ schema, context: { db: req.app.locals.db } }))
  )
  server.get('/graphiql', graphiqlExpress({ endpointURL: '/api' }))
  server.get('*', (req, res) => handle(req, res))
  server.listen(port, err => {
    if (err) throw err
    server.locals.db = db
    console.log(`> Ready on http://localhost:${port}`)
  })
})
