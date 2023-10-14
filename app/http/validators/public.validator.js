const Joi = require("joi");
const { MongoIdPattern } = require("../../utils/Constant");
const createHttpError = require("http-errors");



 const objectIdValidator = Joi.object({


    id : Joi.string().pattern(MongoIdPattern).error(new Error(createHttpError.BadRequest("شناسه مورد نظر اشتباه می باشد")))



 })


 module.exports = {
    objectIdValidator
 }