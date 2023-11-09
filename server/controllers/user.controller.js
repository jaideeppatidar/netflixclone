const User = require("../models/user.model");
const userService = require("../services/user.service");

const registerUser = async (req, res) => {
  try {
    const { email } = req.body;
    const newUser = await userService.createUser(email);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while registering the user." });
  }
};
const createPassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.createPassword(email, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while registering the user." });
  }
};

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const User = await userService.logIn(email, password);
    res.json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: "LogIn Error" });
  }
};

module.exports = {
  registerUser,
  createPassword,
  logIn
};
