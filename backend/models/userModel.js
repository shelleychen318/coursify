const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static signup method
userSchema.statics.signup = async function (email, password) {
  // validation
  if (!email || !password) {
    throw Error("All fields must be filled.");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid.");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough.");
  }

  // check if email already exists in database
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use.");
  }

  // generate salt and hash password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  // create new doc in database
  const user = await this.create({ email, password: hash });

  return user;
};

// create a User model based on this schema
module.exports = mongoose.model("User", userSchema);
