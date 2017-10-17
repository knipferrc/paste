import cookie from 'cookie'

const parseCookies = (ctx = {}, options = {}) => {
  return cookie.parse(
    ctx.req && ctx.req.headers.cookie
      ? ctx.req.headers.cookie
      : document.cookie,
    options
  )
}

export default parseCookies
