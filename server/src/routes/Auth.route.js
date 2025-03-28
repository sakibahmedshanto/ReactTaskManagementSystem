const express = require('express');
const Authcontroller = require('../controllers/Authcontroller');
const AuthValidation = require('../vallidation/Auth.validation');
const router = express.Router();

router.post("/",AuthValidation.registerUser,Authcontroller.registerUser);


exports.router = router;