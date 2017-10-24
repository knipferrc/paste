export default `
type Query {
  userProfile: User
  myPastes(userId: ID!): [Paste]
}
`
