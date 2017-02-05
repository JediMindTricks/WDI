const
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  passportLocalMongoose = require('passport-local-mongoose'),
  tweetSchema = new Schema({
  	body: String,
  }, {timestamps: true})
  userSchema = new Schema({
    username: String,
    tweets: [tweetSchema],
    password: String
  })

userSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model('users', userSchema)
