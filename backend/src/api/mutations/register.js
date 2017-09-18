import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default async (
  root,
  { firstName, lastName, email, password },
  { db }
) => {
  const duplicateUser = await db
    .collection('users')
    .find({ email: email })
    .count()
  if (duplicateUser !== 1) {
    const saltRounds = 10
    const hash = bcrypt.hashSync(password, saltRounds)
    const user = {
      firstName,
      lastName,
      email,
      password: hash
    }
    await db.collection('users').insertOne(user)
    const token = jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: 60 * 60 * 24
    })
    return token
  } else {
    throw new Error('Sorry, a user has already registered with that email')
  }
}
