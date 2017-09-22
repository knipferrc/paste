export default `
type Query {
  userProfile(accessToken: String!): User
  myBlogs(userId: ID!): [Blog]
  blogContent(blogId: ID!): String
}
`
