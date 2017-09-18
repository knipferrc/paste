import Koa from 'koa'
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
import middleware from './middleware'
import routes from './routes'

const app = new Koa()
const PORT = 5000

dotenv.config()

app.use(async (ctx, next) => {
  try {
    ctx.app.db = await MongoClient.connect(`${process.env.MONGO_URI}`)
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = err.message
    ctx.app.emit('error', err, ctx)
  }
})

app.use(middleware())
app.use(routes())

app.listen(PORT)
