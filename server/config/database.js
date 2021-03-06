const mongoose = require('mongoose')



mongoose.Promise = global.Promise

module.exports = (settings) => {
  mongoose.connect(settings.db)
  let db = mongoose.connection

  db.once('open', err => {
    if (err) {
      throw err
    }

    console.log('MongoDB ready!')

   
  })
  

  db.on('error', err => console.log(`Database error: ${err}`))
}