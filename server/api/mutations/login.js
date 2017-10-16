const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async (root, { email, password }, { db }) => {
  const user = db.prepare('SELECT * FROM users WHERE email=?').get(email)
  if (user) {
    const passwordsMatch = await bcrypt.compare(password, user.password)
    if (passwordsMatch) {
      const token = await jwt.sign(
        { userId: user.id, iss: 'https://pastey.now.sh' },
        process.env.JWT_SECRET
      )
      return token
    } else {
      throw new Error('Invalid Login Credentials')
    }
  } else {
    throw new Error('User not found')
  }
}

module.exports = login
