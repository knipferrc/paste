export default `
type Mutation {
  register(firstName: String!, lastName: String!, email: String!, password: String!): String
  login(email: String!, password: String!): String
  addPaste(title: String, category: String, description: String, content: String, userId: String, status: String): Paste
}
`
