"use strict";

const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  avatar: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("users", userModel);
