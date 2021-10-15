const path = require('path')

let rootPath = path.normalize(path.join(__dirname, '/../'))

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb+srv://admin:admin@oblak.qnbmf.mongodb.net/Balasnet?retryWrites=true&w=majority',
    port: 5000
  },
  staging: {
  },
  production: {
    port: process.env.PORT
  }
}