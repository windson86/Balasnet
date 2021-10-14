const mongoose = require("mongoose");
const encryption = require("../utils/encryption");

const REQUIRED_VALIDATION_MESSAGE = "{PATH} is required";

let userSchema = new mongoose.Schema({
  email: { type: String, required: REQUIRED_VALIDATION_MESSAGE, unique: true },
  username: {
    type: String,
    required: REQUIRED_VALIDATION_MESSAGE,
    unique: true,
  },
  salt: String,
  password: String,
  level: { type: Number },
  points: { type: Number, default: 50 },
});

userSchema.method({
  authenticate: function (password) {
    return (
      encryption.generateHashedPassword(this.salt, password) === this.password
    );
  },
});

let User = mongoose.model("User", userSchema);

module.exports = User;
