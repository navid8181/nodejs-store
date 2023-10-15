const createHttpError = require("http-errors");
const { CourseModel } = require("../../../../models/course");
const Controller = require("../../controller");
const {StatusCodes: httpStatus} = require('http-status-codes');
const { default: mongoose } = require("mongoose");
const { AbstractCourseController } = require("./course.controller");

class ChapterController extends AbstractCourseController {

    async addChapter (req,res,next){

        try {

            const {id,title,text} = req.body

            const course = await this.findCourseById(id);

            const saveChapterResult = await CourseModel.updateOne({_id : id},{
                $push : {
                    chapters : {title,text,episode : []}
                }
            })

            if (saveChapterResult.modifiedCount === 0)
                throw createHttpError.InternalServerError("فصل افزوده نشد")

            res.status(httpStatus.CREATED).json({

                statusCode : httpStatus.CREATED,
                data : {

                    message : "فصل با موفقیت افزوده شد"



                }

            })

        } catch (error) {
            next(error)
        }

    }
 


}

module.exports = {chapterController : new ChapterController()}