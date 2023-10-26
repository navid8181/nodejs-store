const {CourseModel} = require("../../../../models/course");
const path = require('path');
const Controller = require("../../controller");
const {StatusCodes: httpStatus} = require('http-status-codes');
const {createCourseSchema} = require("../../../validators/admin/course.schema");
const { default: mongoose } = require("mongoose");
const createHttpError = require("http-errors");
const { objectIdValidator } = require("../../../validators/public.validator");
const { copyObject, removeWrongData, deleteFileInPublic } = require("../../../../utils/function");
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
                }).populate([{path : "category"}])
                .sort({_id: -1})
             else 
                courses = await CourseModel.find({}).populate([{path : "category"},{path : "teacher", select : {first_name : 1,last_name : 1,mobile : 1,_id :0}}]).sort({_id: -1})
            
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


    
    

    async findCourseById(id){

        if (!mongoose.isValidObjectId(id))
            throw createHttpError.BadRequest("شناسه ارسالی معتبر نیست")

        const course = await CourseModel.findOne({_id : id});

        if (!course) throw createHttpError.NotFound("چنین دوره ای یافت نشد")

        return course;
        

    }


    async updateCourseById (req,res,next){

        try {

            const {id} = req.params;

           const course =  await this.findCourseById(id)

            const data = copyObject(req.body)

            const blackList = ["time","chapters","episode","students","likes","bookmarks","likes","dislikes","comments"]

            removeWrongData(data,blackList)

                const {filename,filePath} = req.body;

                if (filename){
                    data.image = path.join(filePath, filename).replace(/\\/g, "/")

                    deleteFileInPublic(course.image)
                }


            return res.json(
              data
            )
        } catch (error) {
            next(error)
        }

    }

    


}


module.exports = {
    AbstractCourseController : CourseController,
    CourseController: new CourseController()
}
