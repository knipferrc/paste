const jwt = require('jsonwebtoken')

const userProfile = async (root, { accessToken }, { db }) => {
  const verifiedJWT = await jwt.verify(accessToken, process.env.JWT_SECRET)
  if (verifiedJWT) {
    const user = db
      .prepare('SELECT * FROM users WHERE id=?')
      .get(verifiedJWT.userId)
    if (user) {
      return user
    } else {
      throw new Error('Error fetching profile')
    }
  } else {
    throw new Error('Must be logged in')
  }
}

module.exports = userProfile
