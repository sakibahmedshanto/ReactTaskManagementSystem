const express = require('express');
const ErrorHandling = require('./middlewares/ErrorHandle');
const app = express();

app.use("*",(req,res)=>{
    throw new Error("Route not found");
})

app.use(ErrorHandling)
module.exports = app;