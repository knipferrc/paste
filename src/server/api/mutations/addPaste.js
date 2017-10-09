export default async (
  root,
  { title, category, description, content, userId, status },
  { db }
) => {
  const newPaste = await db.collection('pastes').insertOne({
    title,
    category,
    description,
    content,
    createdBy: userId,
    status
  })
  if (newPaste) {
    return newPaste.ops[0]
  } else {
    throw new Error('Error adding new paste!!')
  }
}
