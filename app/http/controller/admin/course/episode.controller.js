const {default: getVideoDurationInSeconds} = require("get-video-duration");
const {createEpisodeSchema} = require("../../../validators/admin/course.schema");
const Controller = require("../../controller");
const path = require('path');
const {getTime, removeWrongData, copyObject} = require("../../../../utils/function");
const {CourseModel} = require("../../../../models/course");
const {StatusCodes: httpStatus} = require('http-status-codes');
const createHttpError = require("http-errors");
const {default: mongoose} = require("mongoose");
const {objectIdValidator} = require("../../../validators/public.validator");


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

            const videoDateTime = new Date(videoDurationInSeconds * 1000)

            const course = await CourseModel.findOne({
                _id: courseID,
                "chapters._id": chapterID
            }, {"chapters.totalTime.$": 1})

            const currentVideoTime = new Date(course.chapters[0].totalTime);

            const newTotalTime = new Date(currentVideoTime.getTime() + videoDateTime.getTime())


            const episode = {
                title,
                text,
                type,
                videoAddress,
                time: videoDateTime
            }
            const createEpisodeResult = await CourseModel.updateOne({
                _id: courseID,
                "chapters._id": chapterID
            }, {

                $push: {
                    "chapters.$.episode": episode
                },
                $set: {
                    "chapters.$.totalTime": newTotalTime
                }

            })

            if (createEpisodeResult.modifiedCount == 0) 
                throw createHttpError.InternalServerError("ویدیو افزوده نشد")


            


            return res.status(httpStatus.OK).json({
                statusCode: httpStatus.OK,
                data: {
                    message: "ویدیو با موفقیت بارگزاری شد"
                }
            })

        } catch (error) {
            next(error)
        }

    }

    async removeEpisode(req, res, next) {

        try { // const {courseID} = req.body
            const {episodeID} = req.params


            const course = await this.findEpisodeByID(episodeID)


            const videoEpisodeDateTime = new Date(course[0].chapters.episode.time)

            const currentVideoTotalTime = new Date(course[0].chapters.totalTime);

            const newTotalTime = new Date(currentVideoTotalTime.getTime() - videoEpisodeDateTime.getTime())


            const deleteEpisodeResult = await CourseModel.updateOne({

                "chapters.episode._id": episodeID
            }, {

                $pull: {
                    "chapters.$.episode": {
                        _id: episodeID
                    }
                },
                $set: {
                    "chapters.$.totalTime": newTotalTime
                }

            })

            if (deleteEpisodeResult.modifiedCount == 0) 
                throw createHttpError.InternalServerError("ویدیو حذف نشد")


            


            return res.status(httpStatus.OK).json({
                statusCode: httpStatus.OK,
                data: {
                    message: "ویدیو با موفقیت حذف  شد"
                }
            })

        } catch (error) {
            next(error)
        }

    }

    async updateEpisode(req, res, next) {

        try {

            const {episodeID} = req.params
            const {filename, filePath} = req.body

            const blackList = ["_id"];
            let videoDateTime = undefined;
            if (filename && filePath) {

                req.body.videoAddress = path.join(filePath, filename).replace(/\\/g, "/")

                const videoURL = `${
                    process.env.BASE_URL
                }:${
                    process.env.PORT
                }/${
                    req.body.videoAddress
                }`

                const videoDurationInSeconds = await getVideoDurationInSeconds(videoURL)

                videoDateTime = new Date(videoDurationInSeconds * 1000)
                req.body.time = videoDateTime;
            } else {
                blackList.push("videoAddress")
                blackList.push("time")
            }
            const data = req.body;

            let totalTime = undefined;
            const course = await this.findEpisodeByID(episodeID)

            if (filename && filePath) {


                const videoEpisodeDateTime = new Date(course[0].chapters.episode.time)

                const currentVideoTotalTime = new Date(course[0].chapters.totalTime);

                const newTotalTime = new Date(currentVideoTotalTime.getTime() - videoEpisodeDateTime.getTime() + req.body.time.getTime())
                totalTime = newTotalTime;
                console.log("total time :", course);
            }


            removeWrongData(data, blackList)


            const newData = copyObject(req.body)
            const episode = course[0].chapters.episode;

            episode.title = data.title ? data.title : episode.title
            episode.text = data.text ? data.text : episode.text
            episode.type = data.type ? data.type : episode.type
            episode.time = data.time ? data.time : episode.time
            episode.videoAddress = data.videoAddress ? data.videoAddress : episode.videoAddress

            delete episode._id
            console.log(episode);
            if (filePath && filename) {

                const updateEpisodeResult = await CourseModel.updateOne({

                    "chapters.episode._id": episodeID
                }, {


                    $push: {
                        "chapters.$.episode": {
                            ... episode
                        }


                    },
                    $set: {
                        "chapters.$.totalTime": totalTime

                    }

                })

                if (updateEpisodeResult.modifiedCount == 0) 
                    throw createHttpError.InternalServerError("ویدیو بروزرسانی  نشد")

                

                const updatePullEpisodeResult = await CourseModel.updateOne({

                    "chapters.episode._id": episodeID
                }, {


                    $pull: {
                        "chapters.$.episode": {
                            _id: episodeID
                        }
                    }

                })


                if (updatePullEpisodeResult.modifiedCount == 0) 
                    throw createHttpError.InternalServerError("ویدیو بروزرسانی  نشد")

                

                return res.status(httpStatus.OK).json({
                    statusCode: httpStatus.OK,
                    data: {

                        message: "ویدیو با موفقیت بروزرسانی شد"
                    }
                })
            } else {
                const updateEpisodeResult = await CourseModel.updateOne({

                    "chapters.episode._id": episodeID
                }, {


                    $push: {
                        "chapters.$.episode": {
                            ... episode
                        }


                    }

                })
                if (updateEpisodeResult.modifiedCount == 0) 
                    throw createHttpError.InternalServerError("ویدیو بروزرسانی  نشد")

                

                const updatePullEpisodeResult = await CourseModel.updateOne({

                    "chapters.episode._id": episodeID
                }, {


                    $pull: {
                        "chapters.$.episode": {
                            _id: episodeID
                        }
                    }

                })


                if (updatePullEpisodeResult.modifiedCount == 0) 
                    throw createHttpError.InternalServerError("ویدیو بروزرسانی  نشد")


                


                return res.status(httpStatus.OK).json({
                    statusCode: httpStatus.OK,
                    data: {

                        message: "ویدیو با موفقیت بروزرسانی شد"
                    }
                })
            }


        } catch (error) {
            next(error)
        }

    }

    async findEpisodeByID(episodeID) {
        const course = await CourseModel.aggregate([
            {
                $match: {

                    "chapters.episode._id": new mongoose.Types.ObjectId(episodeID)

                }

            },
            {
                $unwind: "$chapters"


            },
            {
                $unwind: "$chapters.episode"


            },
            {
                $match: {

                    "chapters.episode._id": new mongoose.Types.ObjectId(episodeID)

                }
            }, {
                $project: {
                    "chapters.episode": 1,
                    "chapters.totalTime": 1,
                    _id: 0
                }
            }
        ])
        if (! course) 
            throw createHttpError.BadRequest("چنین اپیزودی با این مشخصات یافت نشد")


        


        return course;
    }


}


module.exports = {
    episodeController: new EpisodeController()
}
