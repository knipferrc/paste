import { ObjectID } from 'mongodb'

export default async (root, { blogId }, { db }) => {
  const blogContent = await db
    .collection('blogs')
    .findOne({ _id: new ObjectID(blogId) })
  if (blogContent) {
    return blogContent.content
  } else {
    throw new Error('Error finding blog content')
  }
}
