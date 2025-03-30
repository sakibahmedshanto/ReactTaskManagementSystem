const { validationResult } = require("express-validator");
const ApiError = require("../utils/ApiError");

const validationError = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const err = result.array()[0].msg;
    next(new ApiError(400, err));
  }
  next();
};
module.exports = validationError;
