const { body } = require("express-validator");

class AuthValidation {
  static registerUser = () => {
    body("name").notEmpty().withMessage("PLease Provide a valid name");

    body("email")
      .notEmpty()
      .withMessage("Please Provide a valid email")
      .isEmail()
      .withMessage("Email is not valid");
      body("password")
      .notEmpty().withMessage("Please Provide a valid password")
      .isLength({ min: 6 }).withMessage("Password must be at least 6 characters long");
  };
}

module.exports = AuthValidation;
