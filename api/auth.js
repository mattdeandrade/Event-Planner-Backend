const express = require("express");
const router = express.Router();

//This creates the token we will use for registered and logged in users
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
function createToken(id) {
  return jwt.sign({ id }, JWT_SECRET, { expiresIn: "1d" });
}
