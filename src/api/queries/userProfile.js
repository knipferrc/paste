import { ObjectId } from 'mongodb'
import jwt from 'jsonwebtoken'

export default async (root, { accessToken }, { db }) => {
  const verifiedJWT = await jwt.verify(accessToken, process.env.RAZZLE_JWT_SECRET)
  if (verifiedJWT) {
    const user = await db
      .collection('users')
      .findOne({ _id: new ObjectId(verifiedJWT.userId) })
    if (user) {
      return user
    } else {
      throw new Error('Error fetching profile')
    }
  } else {
    throw new Error('Must be logged in')
  }
}
