const { body } = require('express-validator');

const registerValidation = [
    body('name').isString().isLength({ min: 3, max: 255 }).withMessage('Name must be between 3 and 255 characters.'),
    body('email').isEmail().withMessage('Invalid email address.'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.'),
];

const loginValidation = [
    body('email').isEmail().withMessage('Invalid email address.'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.'),
];

module.exports = { registerValidation, loginValidation };
