const express = require('express');
const Authcontroller = require('../controllers/Authcontroller');
const { registerValidation } = require('../validation/Auth.validation'); // Corrected path and import
const validationError = require('../middlewares/validationError');
const router = express.Router();
const a =Authcontroller.registerUser;
router.route("/")
    .post(registerValidation,validationError,a );

module.exports = router;