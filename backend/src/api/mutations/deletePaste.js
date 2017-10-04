import { ObjectID } from 'mongodb'

export default async (root, { pasteId }, { db }) => {
  const deletedPaste = await db
    .collection('pastes')
    .findOneAndDelete({ _id: new ObjectID(pasteId) }, { returnOriginal: false })

  if (deletedPaste) {
    return deletedPaste.value
  } else {
    throw new Error('Error deleting paste')
  }
}
