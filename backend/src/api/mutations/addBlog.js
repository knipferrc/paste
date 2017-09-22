export default async (
  root,
  { title, category, description, content, userId },
  { db }
) => {
  const newBlog = await db.collection('blogs').insertOne({
    title,
    category,
    description,
    content,
    createdBy: userId,
    status: 'unpublished'
  })
  if (newBlog) {
    return newBlog.ops[0]
  } else {
    throw new Error('Error adding new blog!!')
  }
}
