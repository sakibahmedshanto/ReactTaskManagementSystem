const express = require("express");
const AuthController = require("../controllers/Auth.controller"); // Ensure this path is correct
const AuthValidation = require("../validations/Auth.validation"); // Ensure this path is correct
const ValidationError = require("../middlewares/ValidationError");
const AuthValidator = require("../middlewares/AuthValidator");
const router = express.Router();

router.route("/register")
.post(AuthValidation.registerUser, ValidationError, AuthController.registerUser);

router.route("/login")
.post(AuthValidation.loginUser, ValidationError, AuthController.loginUser);

router.route("/profile")
.get(AuthValidator, AuthController.profileUser);

module.exports = router;