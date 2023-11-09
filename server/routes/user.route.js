const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

router.post("/users/email", userController.registerUser);
router.post("/users/password", userController.createPassword);
router.post("/login", userController.logIn);

module.exports = router;
