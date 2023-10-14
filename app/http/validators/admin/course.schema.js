const Joi = require("joi");
const {MongoIdPattern} = require("../../../utils/Constant");
const createHttpError = require("http-errors");


const createCourseSchema = Joi.object({


    title: Joi.string().min(3).max(30).error(createHttpError.BadRequest("عنوان دوره صحیح نمی باشد")),
    text: Joi.string().error(createHttpError.BadRequest("متن ارسال شده صحیح نمی باشد")),
    short_text: Joi.string().error(createHttpError.BadRequest("متن ارسال شده صحیح نمی باشد")),
    tags: Joi.array().min(0).max(20).error(createHttpError.BadRequest("برچسب ها نمی تواند بیشتر از 20 عدد باشد")),
    category: Joi.string().pattern(MongoIdPattern).error(createHttpError.BadRequest("دسته بندی مورد نظر یافت نشد")),

    price: Joi.number().error(createHttpError.BadRequest("قیمت وارد شده صحیح نمی باشد")),
    discount: Joi.number().error(createHttpError.BadRequest("تخفیف وارد شده صحیح نمی باشد")),
    


    type : Joi.string().pattern(/(free|cash|special)/i).error(createHttpError.BadRequest("نوع محصول صحیح نیست")),
    filePath: Joi.allow(),
    filename: Joi.string().pattern(/(\.jpg|\.png|\.webp|\.jpeg|\.gif)$/).error(createHttpError.BadRequest("تصویر ارسال شده صحیح نمی باشد"))
   
})


module.exports = {
    createCourseSchema
}
