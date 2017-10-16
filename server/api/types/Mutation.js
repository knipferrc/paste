const Mutation = `
type Mutation {
  register(firstName: String!, lastName: String!, email: String!, password: String!): String
  login(email: String!, password: String!): String
}
`

module.exports = Mutation
