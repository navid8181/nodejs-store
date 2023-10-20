const {default: getVideoDurationInSeconds} = require("get-video-duration");
const {createEpisodeSchema} = require("../../../validators/admin/course.schema");
const Controller = require("../../controller");
const path = require('path');
const {getTime} = require("../../../../utils/function");
const { CourseModel } = require("../../../../models/course");
const {StatusCodes: httpStatus} = require('http-status-codes');
const createHttpError = require("http-errors");


class EpisodeController extends Controller {

    async addNewEpisode(req, res, next) {

        try {

            const {
                title,
                text,
                courseID,
                chapterID,
                type,
                filename,
                filePath
            } = await createEpisodeSchema.validateAsync(req.body);

            const videoAddress = path.join(filePath, filename).replace(/\\/g, "/")

            const videoURL = `${
                process.env.BASE_URL
            }:${
                process.env.PORT
            }/${videoAddress}`

            const videoDurationInSeconds = await getVideoDurationInSeconds(videoURL)

           const videoDateTime =  new Date(videoDurationInSeconds*1000)
 
           const course = await CourseModel.findOne({_id : courseID,"chapters._id" : chapterID},{"chapters.totalTime.$" : 1})
         
            const currentVideoTime = new Date(course.chapters[0].totalTime);

            const newTotalTime = new Date(currentVideoTime.getTime() + videoDateTime.getTime())


            const episode = {title,text,type,videoAddress,time : videoDateTime}
            const createEpisodeResult = await CourseModel.updateOne({_id : courseID,"chapters._id" : chapterID},{
                
                $push : {
                    "chapters.$.episode" : episode
                },
                $set : {
                    "chapters.$.totalTime" : newTotalTime
                }

            })

            if (createEpisodeResult.modifiedCount == 0)
                throw createHttpError.InternalServerError("ویدیو افزوده نشد")

                


            return res.status(httpStatus.OK).json({
                statusCode : httpStatus.OK,
                data : {
                    message : "ویدیو با موفقیت بارگزاری شد"
                }
            })

        } catch (error) {
            next(error)
        }

    }

}


module.exports = {
    episodeController: new EpisodeController()
}
