
const jsonwebtoken = require('jsonwebtoken'); 
const { SECRET_KEY } = require('../../utils/Constant');
const createHttpError = require('http-errors');
const { UserModel } = require('../../models/user');

function VerifyAccessToken(req,res,next){
    const headers  = req.headers;
   
    const [Bearer,accessToken] = headers?.accessToken?.split(" ");
    
    if (accessToken && Bearer?.toLowerCase() === "bearer"){
        
            jsonwebtoken.verify(accessToken,SECRET_KEY,{},(error,payload)=>{
        
                if (error) 
                return next (createHttpError.Unauthorized("دوباره وارد حساب کاربری خود بشوید"))    

                const {mobile} =  payload || {};

                const user = UserModel.findOne({mobile})

                if (!user)
                return next (createHttpError.Unauthorized("کاربری با این مشخصات یافت نشد"))

                req.user = user;

                return next();
                

            })

    }

    return next (createHttpError.Unauthorized("دوباره وارد حساب کاربری خود بشوید"))

}

module.exports = {
    VerifyAccessToken
}