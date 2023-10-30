const createHttpError = require("http-errors");
const {authSchema, getOtpSchema, checkOtpSchema} = require("../../../validators/user/auth.schema");
const {UserModel} = require("../../../../models/user");
const {removeWrongData, randomNumberGenerator, signAccessToken, VerifyRefreshToken, signRefreshToken} = require("../../../../utils/function");
const { ROLE } = require("../../../../utils/Constant");
const Controller = require("../../controller");
const {StatusCodes : httpStatus} = require('http-status-codes');
class UserAuthController extends Controller {



    

    async getOtp(req, res, next) {


        try {

           
             await getOtpSchema.validateAsync(req.body);
            const {mobile} = req.body;

            const code = randomNumberGenerator();

            const result =  await this.saveUser(mobile,code);

            if (!result)
              throw createHttpError.BadGateway("ورود شما انجام نشد")

            return res.status(httpStatus.OK).send({

                statusCode : httpStatus.OK,
               data : {
                message : "کد اعنبار سنجی با موفقیت ارسال شد",
                code,
                mobile
               }



            });
        } catch (error) {
            next(error)
        }


    }


    async checkOtp(req,res,next){

        try {

            await checkOtpSchema.validateAsync(req.body);
            const {mobile,code} = req.body;

            console.log(mobile);
            const user = await UserModel.findOne({mobile});

            if (!user) throw createHttpError.NotFound("کاربری با این مشخصات یافت نشد");

            if (user.otp.code != code) throw createHttpError.Unauthorized("کد ارسال شده صحیح نمی باشد")
            
            const currentTime = Date.now();
            console.log(user.otp.expiresIn,currentTime,+user.otp.expiresIn < currentTime);
            if (+user.otp.expiresIn < currentTime) throw createHttpError.Unauthorized("کد شما منقضی شده است")

            const accessToken = await signAccessToken(user._id);
            const RefreshToken  = await signRefreshToken(user._id);
            return res.status(httpStatus.OK).json({
                statusCode : httpStatus.OK,
                data :{
                    accessToken,
                    RefreshToken
                }

            })
            
            
        } catch (error) {
            next(error)
        }


    }         


    async refreshToken(req,res,next){

        try {


            const {refreshToken} = req.body;

            const mobile = await VerifyRefreshToken(refreshToken);

            

            const user = await UserModel.findOne({mobile});
         
            const accessToken = await signAccessToken(user._id);
            const newRefreshToken  = await signRefreshToken(user._id);
            

            return res.json({


                data  : {
                    accessToken,
                    refreshToken : newRefreshToken

                }

            })


            
        } catch (error) {
            next(error)
        }


    }



    async saveUser(mobile, code) {

        const result = await this.checkExistUser(mobile);
      
        const otp = {
            code,
            expiresIn: (new Date().getTime() + 120_000)
        }

        if (result) {

            return await this.updateUser(mobile, {otp})

        }
      

        return !!(await UserModel.create({mobile, otp,Role :ROLE.USER}))

    }

    async checkExistUser(mobile) {

        const user = await UserModel.findOne({mobile});

        return !! user

    }

    async updateUser(mobile, objectData = {}) {

        removeWrongData(objectData);

        const result = await UserModel.updateOne({
            mobile
        }, {$set: objectData})

        return !! result.modifiedCount;

    }

}


module.exports = {

    UserAuthController: new UserAuthController()

}
