const typeDefs = `
  # the schema allows the following query:
  type Query {
    version: String
  }

  # this schema allows the following mutation:
  type Mutation {
    version: String
  }

  # we need to tell the server which types represent the root query
  # and root mutation types. We call them RootQuery and RootMutation by convention.
  schema {
    query: Query
    mutation: Mutation
  }
`

export default typeDefs
