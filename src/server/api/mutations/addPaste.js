import uuidv4 from 'uuid/v4'

export default async (
  root,
  { title, category, description, content, userId, status },
  { db }
) => {
  const insertPasteQuery = db.prepare(
    'INSERT INTO pastes VALUES(@title, @category, @description, @content, @createdBy, @status, @id)'
  )
  const pasteId = uuidv4()
  return insertPasteQuery.run({
    title,
    category,
    description,
    content,
    createdBy: userId,
    status,
    id: pasteId
  })
}
