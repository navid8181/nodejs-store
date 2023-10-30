const jsonwebtoken = require('jsonwebtoken');
const {SECRET_KEY} = require('../../utils/Constant');
const createHttpError = require('http-errors');
const {UserModel} = require('../../models/user');

function VerifyAccessToken(req, res, next) {

    const headers = req.headers;

    const [Bearer, accesstoken] = headers ?. authorization ?. split(" ") || [];
    console.log(accesstoken);
    if (accesstoken && Bearer ?. toLowerCase() === "bearer") {

        jsonwebtoken.verify(accesstoken, SECRET_KEY, async (error, payload) => {


            if (error) 
                return next(createHttpError.Unauthorized("دوباره وارد حساب کاربری خود بشوید"))


            


            const {mobile} = payload || {};


            const user = await UserModel.findOne({
                mobile
            }, {
                password: 0,
                otp: 0
            })


            if (! user) 
                return next(createHttpError.Unauthorized("کاربری با این مشخصات یافت نشد"))


            


            req.user = user;


            return next()

        })


    } else 

        return next(createHttpError.Unauthorized("دوباره وارد حساب کاربری خود بشوید"))
}





module.exports = {
    VerifyAccessToken,
    
}
