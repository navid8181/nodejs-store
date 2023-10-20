const createHttpError = require("http-errors");


function multerErrorHandler(req,res,next) {
    
    try {
        if ( req.body?.errorUpload)
        throw createHttpError.BadRequest(req.body?.errorUpload)


       return next();
    } catch (error) {
        next(error)
    }

}

module.exports = multerErrorHandler;