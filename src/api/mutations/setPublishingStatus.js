import { ObjectID } from 'mongodb'

export default async (root, { pasteId, status }, { db }) => {
  const updatedPaste = await db
    .collection('pastes')
    .findOneAndUpdate(
      { _id: new ObjectID(pasteId) },
      { $set: { status } },
      { returnOriginal: false }
    )
  if (updatedPaste) {
    return updatedPaste.value
  } else {
    throw new Error('Error updating publishing status')
  }
}
