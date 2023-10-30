const Joi = require("joi");
const {MongoIdPattern} = require("../../../utils/Constant");
const createHttpError = require("http-errors");


const createRoleSchema = Joi.object({


    title: Joi.string().min(3).max(30).error(createHttpError.BadRequest("عنوان دسته بندی صحیح نمی باشد")),
    
    description: Joi.string().min(3).max(100).error(createHttpError.BadRequest("توضیحات  صحیح نمی باشد")),

    permissions: Joi.array().items(Joi.string().pattern(MongoIdPattern)).error(createHttpError.BadRequest("شناسه ارسالی صحیح نمی باشد"))


})

const createPermissionSchema = Joi.object({


    name: Joi.string().min(3).max(30).error(createHttpError.BadRequest("نام دسترسی صحیح نمی باشد")),
    description: Joi.string().min(3).max(100).error(createHttpError.BadRequest("توضیحات  صحیح نمی باشد")),


})


module.exports = {
    createRoleSchema,
    createPermissionSchema
}
