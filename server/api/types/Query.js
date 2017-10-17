const Query = `
type Query {
  userProfile(accessToken: String): User
}
`

module.exports = Query
