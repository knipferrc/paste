export default async (root, { userId }, { db }) => {
  const myPastes = db
    .prepare('SELECT * FROM pastes WHERE createdBy=?')
    .all(userId)
  if (myPastes) {
    return myPastes
  } else {
    throw new Error('Error fetching your pastes')
  }
}
