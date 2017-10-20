import express from 'express'

const router = express.Router()

router.get('/me', (req, res) => {
  res.json({
    username: 'knipferrc'
  })
})

export default router
