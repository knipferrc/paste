import bcrypt from 'bcrypt'
import db from 'server/utils/db'
import express from 'express'
import jwt from 'jsonwebtoken'
import uuidv4 from 'uuid/v4'

const router = express.Router()

router.get('/me', async (req, res) => {
  const verifiedJWT = await jwt.verify(
    req.query.accesstoken,
    process.env.RAZZLE_JWT_SECRET
  )
  if (verifiedJWT) {
    const user = db
      .prepare('SELECT * FROM users WHERE id=?')
      .get(verifiedJWT.userId)
    if (user) {
      res.json({ user })
    } else {
      res.status(404).send('Error profile not found')
    }
  } else {
    res.status(404).send('Error, profile not found')
  }
})

router.post('/register', async (req, res) => {
  const duplicateUser = db
    .prepare('SELECT * FROM users WHERE email=?')
    .get(req.body.email)
  if (!duplicateUser) {
    const saltRounds = 10
    const hash = await bcrypt.hash(req.body.password, saltRounds)
    const insertUserQuery = db.prepare(
      'INSERT INTO users VALUES(@id, @email, @password, @firstName, @lastName)'
    )
    const userId = uuidv4()
    insertUserQuery.run({
      id: userId,
      email: req.body.email,
      password: hash,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    })
    const token = await jwt.sign(
      { userId: userId, iss: 'https://pastey.now.sh' },
      process.env.RAZZLE_JWT_SECRET
    )
    return res.json({ token })
  } else {
    res.status(404).send('Sorry, this user already exists')
  }
})

export default router
