import { graphiqlKoa, graphqlKoa } from 'apollo-server-koa'

import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import compression from 'koa-compress'
import cors from 'kcors'
import koaRouter from 'koa-router'
import schema from './api/schema'

const app = new Koa()
const router = new koaRouter()
const PORT = 5000

app.use(bodyParser())
app.use(compression())
app.use(cors())

router.post('/api', graphqlKoa({ schema }))
router.get('/api', graphqlKoa({ schema }))

router.get('/graphiql', graphiqlKoa({ endpointURL: '/api' }))

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(PORT)
