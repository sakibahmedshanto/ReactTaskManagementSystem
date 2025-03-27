const express = require('express');
const Authcontroller = require('../controllers/Authcontroller');
const router = express.Router();

router.post("/",Authcontroller.registerUser);


exports.router = router;