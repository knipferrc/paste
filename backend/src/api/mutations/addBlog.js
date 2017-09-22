export default async (
  root,
  { title, category, description, content, userId },
  { db }
) => {
  const data = await db.collection('blogs').insertOne({
    title,
    category,
    description,
    content,
    createdBy: userId,
    status: 'unpublished'
  })
  return data.ops[0]
}
