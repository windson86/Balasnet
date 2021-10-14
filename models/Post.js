const mongoose = require('mongoose')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let postSchema = new mongoose.Schema({
    PostText: {type: String, required: REQUIRED_VALIDATION_MESSAGE},
    creator: {type: mongoose.Schema.Types.ObjectId, required: REQUIRED_VALIDATION_MESSAGE},
    username:{type: String},
    likes: [{type: String}],
    level: {type:Number},
    date: {
        type: Date,
        // `Date.now()` returns the current unix timestamp as a number
        default: Date.now
      }
  })

  let Post = mongoose.model('Post', postSchema)

module.exports = Post