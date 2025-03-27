const ErrorHandling = (err,req,res,next) =>{
    const obj={
        'StatusCode':500,
    }
    obj['message']=err.message;
    if(err instanceof Error){
        obj['message']=err.message;
        obj['Stack']=err.stack;
    }
    res.status(obj.StatusCode).send(obj);
}

module.exports =ErrorHandling