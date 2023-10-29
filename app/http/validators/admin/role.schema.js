const Joi = require("joi");
const {MongoIdPattern} = require("../../../utils/Constant");
const createHttpError = require("http-errors");


const createRoleSchema = Joi.object({


    title: Joi.string().min(3).max(30).error(createHttpError.BadRequest("عنوان دسته بندی صحیح نمی باشد")),
    permissions: Joi.allow()


})


module.exports = {
    createRoleSchema
}
