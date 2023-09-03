const createHttpError = require("http-errors");


function multerErrorHandler(req,res,next) {
    
    try {
        if ( req.body?.errorUpload)
        throw createHttpError.BadRequest("فرمت ارسال شده صحیح نمی باشد")


       return next();
    } catch (error) {
        next(error)
    }

}

module.exports = multerErrorHandler;