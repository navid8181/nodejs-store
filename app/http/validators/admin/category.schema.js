const joi = require('joi');
const { MongoIdPattern } = require('../../../utils/Constant');


const addCategorySchema = joi.object({
    
    title: joi.string().min(3).max(30).error(new Error("نام دسته بندی صحیح نمی باشد")),


    parent: joi.string().allow('').pattern(MongoIdPattern).allow("").error(new Error("شناسه ی ارسال شده صحیح نمی باشد"))



})


const updateCategorySchema = joi.object({
    
    title: joi.string().min(3).max(30).error(new Error("نام دسته بندی صحیح نمی باشد"))





})


module.exports = {
    addCategorySchema,
    updateCategorySchema

}
