import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default async (root, { email, password }, { db }) => {
  const user = await db.collection('users').findOne({ email })
  if (user) {
    const passwordsMatch = await bcrypt.compare(password, user.password)
    if (passwordsMatch) {
      const token = await jwt.sign(
        { userId: user._id, iss: 'https://pastey.now.sh' },
        process.env.RAZZLE_JWT_SECRET
      )
      return token
    } else {
      throw new Error('Invalid Login Credentials')
    }
  } else {
    throw new Error('User not found')
  }
}
