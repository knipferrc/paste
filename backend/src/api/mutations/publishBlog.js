import { ObjectID } from 'mongodb'

export default async (root, { blogId }, { db}) => {
  const publishedBlog = await db.collection('blogs').findOneAndUpdate({ _id: new ObjectID(blogId) }, { $set: { status: 'published' }})
  if(publishedBlog) {
    return publishedBlog.value
  } else {
    throw new Error('Error publishing blog')
  }
}
