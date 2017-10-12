import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import uuidv4 from 'uuid/v4'

export default async (
  root,
  { email, password, firstName, lastName },
  { db }
) => {
  const duplicateUser = db
    .prepare('SELECT * FROM users WHERE email=?')
    .get(email)
  if (!duplicateUser) {
    const saltRounds = 10
    const hash = await bcrypt.hash(password, saltRounds)
    const insertUserQuery = db.prepare(
      'INSERT INTO users VALUES(@id, @email, @password, @firstName, @lastName)'
    )
    const userId = uuidv4()
    insertUserQuery.run({
      id: userId,
      email,
      password: hash,
      firstName,
      lastName
    })
    const token = await jwt.sign(
      { userId: userId, iss: 'https://pastey.now.sh' },
      process.env.RAZZLE_JWT_SECRET
    )
    return token
  } else {
    throw new Error('Sorry, that email is already in use')
  }
}
