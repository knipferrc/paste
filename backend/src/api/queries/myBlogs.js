export default async (root, { userId }, { db }) => {
  const myBlogs = await db
    .collection('blogs')
    .find({ createdBy: userId })
    .toArray()
  if (myBlogs) {
    return myBlogs
  } else {
    throw new Error('Error fetching your blogs')
  }
}
