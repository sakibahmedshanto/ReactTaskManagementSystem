const express = require('express');
const ErrorHandling = require('./middlewares/ErrorHandle');
const ApiError = require('./utils/ApiError');
const app = express();

app.use("/api/v1",require('./routes'));

app.use("*",(req,res)=>{
    throw new ApiError(500,"Route not found");
})

app.use(ErrorHandling)
module.exports = app;