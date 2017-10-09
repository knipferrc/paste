export default async (root, { userId }, { db }) => {
  const myPastes = await db
    .collection('pastes')
    .find({ createdBy: userId })
    .toArray()
  if (myPastes) {
    return myPastes
  } else {
    throw new Error('Error fetching your pastes')
  }
}
