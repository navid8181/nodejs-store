const {CourseModel} = require("../../../models/course");
const path = require('path');
const Controller = require("../controller");
const {StatusCodes: httpStatus} = require('http-status-codes');
const {createCourseSchema} = require("../../validators/admin/course.schema");
const { default: mongoose } = require("mongoose");
const createHttpError = require("http-errors");
const { objectIdValidator } = require("../../validators/public.validator");
class CourseController extends Controller {

    async getListOfCourse(req, res, next) {

        try {

            const {search} = req.query;

            let courses
            if (search) 
                courses = await CourseModel.find({
                    $text: {
                        $search: search
                    }
                }).sort({_id: -1})
             else 
                courses = await CourseModel.find({}).sort({_id: -1})
            
            return res.json({

                StatusCode: httpStatus.OK,
                data: {
                    courses


                }


            })

        } catch (error) {
            next(error)
        }

    }


    async addCourse(req, res, next) {

        try {

            await createCourseSchema.validateAsync(req.body)

            const {filePath, filename} = req.body;

            const image = path.join(filePath, filename).replace(/\\/g, "/")
            const {
                title,
                text,
                short_text,
                tags,
                category,
                price,
                discount,
                type
            } = req.body

            const teacher = req.user._id
                
            if (Number(price) > 0 && type === "free" )
                throw createHttpError.BadRequest("برای مصحول رایگان نمی توان قیمت تعریف کرد")
            
            const course = await CourseModel.create({
                title,
                text,
                short_text,
                tags,
                category,
                price,
                discount,
                image,
                time : "00:00:00",
                status : "notStarted",
                teacher,
                type
            })

            if (!course?._id)
                throw createHttpError.InternalServerError("دوره ایجاد نشد")
            
            return res.status(httpStatus.CREATED).json({
                statusCode: httpStatus.CREATED,
                data: {
                    message: "دوره با موفقیت ایجاد شد"
                }
            })

        } catch (error) {
            next(error)
        }

    }


    async getCourseById (req,res,next){

        try {

            const {id} = req.params;
           await  objectIdValidator.validateAsync({id})

           const course = await CourseModel.findOne({_id : id})

           if (!course)
                throw createHttpError.BadRequest("چنین دوره ای با این مشخصات یافت نشد")

                res.status(httpStatus.OK).json ({

                    data : {
                      statusCode : httpStatus.OK,
                      course
                      
                        
                        
                    }


                })

        } catch (error) {
            next(error)
        }


    
    }
    // async addCourse (req,res,next){

    //     try {

    //     } catch (error) {
    //         next(error)
    //     }

    // }


    


}


module.exports = {
    CourseController: new CourseController()
}
