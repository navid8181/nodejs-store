const createHttpError = require("http-errors");
const {authSchema, getOtpSchema, checkOtpSchema} = require("../../../validators/user/auth.schema");
const {UserModel} = require("../../../../models/user");
const {removeWrongData, randomNumberGenerator, signAccessToken} = require("../../../../utils/function");
const { EXPIRESIN, USER_ROLE } = require("../../../../utils/Constant");
const Controller = require("../../controller");

class UserAuthController extends Controller {


    async getOtp(req, res, next) {


        try {

           
             await getOtpSchema.validateAsync(req.body);
            const {mobile} = req.body;

            const code = randomNumberGenerator();

            const result =  await this.saveUser(mobile,code);

            if (!result)
              throw createHttpError.BadGateway("ورود شما انجام نشد")

            return res.status(200).send({

                statusCode : 200,
                message : "کد اعنبار سنجی با موفقیت ارسال شد",
                code,
                mobile



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
            if (+user.otp.expiresIn < currentTime) throw createHttpError.Unauthorized("کد شما منقضی شده است")

            const accessToken = await signAccessToken(user._id);

            return res.json({

                data :{
                    accessToken
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
            expiresIn: EXPIRESIN
        }

        if (result) {

            return await this.updateUser(mobile, {otp})

        }
      

        return !!(await UserModel.create({mobile, otp,Role :[USER_ROLE]}))

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
