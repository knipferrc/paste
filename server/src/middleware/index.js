import bodyParser from 'koa-bodyparser'
import compose from 'koa-compose'
import compression from 'koa-compress'
import cors from 'kcors'
import helmet from 'koa-helmet'

export default function middleware() {
  return compose([helmet(), cors(), bodyParser(), compression()])
}
