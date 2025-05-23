const express = require("express")
const ErrorHandle = require("./middlewares/ErrorHandle")
const { ApiError } = require("./utils/ApiError")
const cors = require("cors")
const app = express()

//midlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use("/api/v1",require("./routes"))


app.use("*",(req,res)=>{
    throw new ApiError(404,"page not found")
})
 
app.use(ErrorHandle)

module.exports = app 