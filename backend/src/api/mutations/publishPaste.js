import { ObjectID } from 'mongodb'

export default async (root, { pasteId }, { db }) => {
  const publishedPaste = await db
    .collection('pastes')
    .findOneAndUpdate(
      { _id: new ObjectID(pasteId) },
      { $set: { status: 'published' } }
    )
  if (publishedPaste) {
    return publishedPaste.value
  } else {
    throw new Error('Error publishing paste')
  }
}
