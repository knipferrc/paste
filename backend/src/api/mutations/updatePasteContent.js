import { ObjectID } from 'mongodb'

export default async (root, { pasteId, pasteContent }, { db }) => {
  const updatedPaste = await db
    .collection('pastes')
    .findOneAndUpdate(
      { _id: new ObjectID(pasteId) },
      { $set: { content: pasteContent } },
      { returnOriginal: false }
    )

  if (updatedPaste) {
    return updatedPaste.value
  } else {
    throw new Error('Error updating paste content')
  }
}
