/* This file contains controller functions to handle the various requests related to user authentication. */

const User = require("../models/userModel");
const mongoose = require("mongoose");

// login user
const loginUser = async (req, res) => {
  res.json({ mssg: "login user" });
};

// signup user
const signupUser = async (req, res) => {
  const { email, password } = req.body;

  // call signup function on User object
  try {
    const user = await User.signup(email, password);

    res.status(200).json({ email, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser };
