export default `
type Query {
  userProfile(accessToken: String!): User
  myPastes(userId: ID!): [Paste]
  pasteContent(pasteId: ID!): String
}
`
