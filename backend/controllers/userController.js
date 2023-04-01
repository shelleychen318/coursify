/* This file contains controller functions to handle the various requests related to user authentication. */

const User = require("../models/userModel");
const mongoose = require("mongoose");

// login user
const loginUser = async (req, res) => {
  res.json({ mssg: "login user" });
};

// signup user
const signupUser = async (req, res) => {
  res.json({ mssg: "signup user" });
};

module.exports = { loginUser, signupUser };
