class ApiError extends Error {
  constructor(statusCode=500, message,stack='') {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ApiError;