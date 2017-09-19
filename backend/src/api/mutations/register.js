import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import uuidv4 from 'uuid/v4'

export default async (
  root,
  { firstName, lastName, email, password },
  { db }
) => {
  const duplicateUser = await db.collection('users').findOne({ email: email })
  if (!duplicateUser) {
    const saltRounds = 10
    let secretKey = uuidv4()
    const hash = await bcrypt.hash(password, saltRounds)
    const userData = {
      firstName,
      lastName,
      email,
      password: hash
    }
    const newUser = await db.collection('users').insertOne(userData)
    const token = await jwt.sign(
      { userId: newUser.insertedId, iss: 'https://pastey.now.sh' },
      secretKey
    )
    return token
  } else {
    throw new Error('Sorry, that email is already in use')
  }
}
