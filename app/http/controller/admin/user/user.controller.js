const createHttpError = require("http-errors");
const {UserModel} = require("../../../../models/user");
const {removeWrongData} = require("../../../../utils/function");
const Controller = require("../../controller");
const {StatusCodes: httpStatus} = require('http-status-codes');

class UserController extends Controller {

    async getAllUser(req, res, next) {

        console.log(req.query);
        const {search} = req.query

        const databaseQuery = {}

        if (search) 
            databaseQuery['$text'] = {
                $search: search
            }

        

        const users = await UserModel.find(databaseQuery);

        return res.status(httpStatus.OK).json({statusCode: httpStatus.OK, data: {
                users
            }})


    }

    async updateUserProfile(req, res, next) {

        try {

            const id = req.user._id;

            const data = req.body;
            const blackList = [
                "mobile",
                "otp",
                "bills",
                "discount",
                "Role",
                "courses"
            ]
            removeWrongData(data, blackList)

            const updateProfileResult = await UserModel.updateOne({_id : id},{

                $set : data
            })

            if (updateProfileResult.modifiedCount == 0)
                throw createHttpError.InternalServerError("پروفایل آپدیت نشد")
            
                return res.status(httpStatus.OK).json({

                    statusCode : httpStatus.OK,
                    data : {
                        message : "پروفایل کاربر با موفقیت بروزرسانی شد"
                    }
                })


        } catch (error) {
            next(error)
        }


    }


    // async updateUserProfile(req,res,next){

    //     try {

    //     } catch (error) {
    //         next(error)
    //     }


    // }


}


module.exports = {
    UserController: new UserController()
}
