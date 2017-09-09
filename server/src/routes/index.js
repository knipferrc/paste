import { graphiqlKoa, graphqlKoa } from 'apollo-server-koa'

import Router from 'koa-router'
import compose from 'koa-compose'
import schema from '../api/schema'

export default function routes() {
  const router = new Router()

  router.post('/api', graphqlKoa(ctx => ({ schema, context: { db: ctx.db } })))
  router.get('/api', graphqlKoa(ctx => ({ schema, context: { db: ctx.db } })))

  router.get('/graphiql', graphiqlKoa({ endpointURL: '/api' }))

  return compose([router.routes(), router.allowedMethods()])
}
