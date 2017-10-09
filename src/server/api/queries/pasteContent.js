import { ObjectID } from 'mongodb'

export default async (root, { pasteId }, { db }) => {
  const pasteContent = await db
    .collection('pastes')
    .findOne({ _id: new ObjectID(pasteId) })
  if (pasteContent) {
    return pasteContent.content
  } else {
    throw new Error('Error finding paste content')
  }
}
