const authRoutes = require('../routes/auth')
const postsRoutes = require('../routes/posts')


module.exports = (app) => {
  app.use('/auth', authRoutes)
  app.use('/posts', postsRoutes)
}