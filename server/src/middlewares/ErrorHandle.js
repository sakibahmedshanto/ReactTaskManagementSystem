const ApiError = require("../utils/ApiError");

const ErrorHandling = (err,req,res,next) =>{
    const obj={
        StatusCode:500
    }
    if(err instanceof ApiError){
        obj['StatusCode']=err.statusCode;
        obj['message']=err.message;
        obj['Stack']=err.stack;
    }
    else{
        obj['message']=err.message;
        obj['Stack']=err.stack;
    }
    res.status(obj.StatusCode).send(obj);
}

module.exports =ErrorHandling