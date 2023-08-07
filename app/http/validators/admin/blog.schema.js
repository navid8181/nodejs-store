const Joi = require("joi");
const {MongoIdPattern} = require("../../../utils/Constant");


const createBlogSchema = Joi.object({


    title: Joi.string().min(3).max(30).error(new Error("عنوان دسته بندی صحیح نمی باشد")),
    text: Joi.string().error(new Error("متن ارسال شده صحیح نمی باشد")),
    short_text: Joi.string().error(new Error("متن ارسال شده صحیح نمی باشد")),
    image: Joi.string().error(new Error("تصویر ارسال شده صحیح نمی باشد")),
    tags: Joi.array().min(0).max(20).error(new Error("برچسب ها نمی تواند بیشتر از 20 عدد باشد")),
    category: Joi.string().pattern(MongoIdPattern).error(new Error("دسته بندی مورد نظر یافت نشد"))


})


module.exports = {
    createBlogSchema
}
