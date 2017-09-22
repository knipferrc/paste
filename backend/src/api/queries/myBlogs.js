export default async (root, { userId }, { db }) => {
  const myBlogs = await db
    .collection('blogs')
    .find({ createdBy: userId })
    .toArray()
  return myBlogs
}
