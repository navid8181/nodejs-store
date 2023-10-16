const createHttpError = require("http-errors");
const {CourseModel} = require("../../../../models/course");
const Controller = require("../../controller");
const {StatusCodes: httpStatus} = require('http-status-codes');
const {default: mongoose} = require("mongoose");
const {AbstractCourseController} = require("./course.controller");
const { removeWrongData } = require("../../../../utils/function");

class ChapterController extends AbstractCourseController {

    async addChapter(req, res, next) {

        try {

            const {id, title, text} = req.body

            const course = await this.findCourseById(id);

            const saveChapterResult = await CourseModel.updateOne({
                _id: id
            }, {
                $push: {
                    chapters: {
                        title,
                        text,
                        episode: []
                    }
                }
            })

            if (saveChapterResult.modifiedCount === 0) 
                throw createHttpError.InternalServerError("فصل افزوده نشد")

            

            res.status(httpStatus.CREATED).json({

                statusCode: httpStatus.CREATED,
                data: {

                    message: "فصل با موفقیت افزوده شد"


                }

            })

        } catch (error) {
            next(error)
        }

    }
    async chapterOfCourses(req, res, next) {

        try {

            const {chapterID} = req.params


            const course = await this.getChapterOfCourse(chapterID);


            res.status(httpStatus.OK).json({statusCode: httpStatus.OK, data: {

                    course


                }})

        } catch (error) {
            next(error)
        }

    }

    async getChapterOfCourse(id) {

        const chapters = await CourseModel.findOne({
            _id: id
        }, {
            chapters: 1,
            title: 1
        })

        if (! chapters) 
            throw createHttpError.NotFound("دوره ای با این مشخصات یافت نشد")

        

        return chapters;

    }

    async removeChapterByID(req, res, next) {

        try {


            const {chapterID} = req.params

            const chapter  = await this.getOneChapter(chapterID)

            const removeResult = await CourseModel.updateOne({"chapters._id" : chapterID},{

                $pull : {
                    "chapters" : {_id : chapterID}
                }

            })

            if (removeResult.modifiedCount ===0 )
                throw createHttpError.InternalServerError("حذف فصل انجام نشد")

              return  res.status(httpStatus.OK).json({

                    statusCode : 200,
                    data : {
                        message : "حذف فصل با موفقیت انجام شد"
                    }


                })


        } catch (error) {
            next(error)
        }


    }

    async getOneChapter(id) {

        const chapter = await CourseModel.findOne({
            "chapters._id": id
        }, {"chapters.$": 1})

        if (! chapter) 
            throw createHttpError.NotFound("فصلی با این شناسه یاقت نشد ")

        

        return chapter;


    }

    async updateChapterByID(req,res,next){

        try {

            const {chapterID} = req.params; 

            await this.getOneChapter(chapterID)

            const data = req.body;

            removeWrongData(data,["_id"])

            const updateResult = await CourseModel.updateOne({"chapters._id" : chapterID} ,{


                $set : {

                    "chapters.$" : data

                    

                }


            })


            if (updateResult.modifiedCount ===0 )
                throw createHttpError.InternalServerError("بروزرسانی انجام نشد")

                return res.status(httpStatus.OK).json({
                    statusCode : httpStatus.OK,
                    data  : {
                        message : "بروزرسانی با موفقیت انجام شد"
                    }
                    
                })


        } catch (error) {
            next(error)
        }

    }

}

module.exports = {
    chapterController: new ChapterController()
}
