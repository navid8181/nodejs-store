const createHttpError = require("http-errors");
const {authSchema} = require("../../../validators/user/auth.schema");
const {UserModel} = require("../../../../models/user");
const {removeWrongData, randomNumberGenerator} = require("../../../../utils/function");
const { EXPIRESIN, USERROLE } = require("../../../../utils/Constant");
const Controller = require("../../controller");

class UserAuthController extends Controller {


    async login(req, res, next) {


        try {

           
             await authSchema.validateAsync(req.body);
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
            next(createHttpError.BadRequest(error.message))
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
      

        return !!(await UserModel.create({mobile, otp,Role :[USERROLE]}))

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
