const createHttpError = require('http-errors');
const JWT = require('jsonwebtoken');
const {UserModel} = require('../models/user');
const {SECRET_KEY, REFRESH_TOKEN_SECRET_KEY} = require('./Constant');
const redisClient = require('./init_redis');
const {token} = require('morgan');
const fs = require('fs');
const path = require('path');

function randomNumberGenerator() {
    return Math.floor((Math.random() * 9_000_0) + 1_000_0);
}


function signAccessToken(userId) {

    return new Promise(async (resolve, reject) => {


        const user = await UserModel.findById(userId);


        const payload = {
            mobile: user.mobile

        };

        const option = {
            expiresIn: "1y"
        };


        JWT.sign(payload, SECRET_KEY, option, (error, token) => {

            if (error) 
                reject(createHttpError.InternalServerError("خطایی در سرور رخ داد"));
            


            resolve(token);


        })


    })


}


function signRefreshToken(userId) {

    return new Promise(async (resolve, reject) => {

        const user = await UserModel.findById(userId);


        const payload = {
            mobile: user.mobile

        };

        const option = {
            expiresIn: "1y"
        };


        JWT.sign(payload, REFRESH_TOKEN_SECRET_KEY, option, async (error, token) => {

            if (error) 
                reject(createHttpError.InternalServerError("خطایی در سرور رخ داد"));
            


            await redisClient.SETEX(userId.toString(), (365 * 24 * 60 * 60), token)

            resolve(token);


        })


    })


}

function VerifyRefreshToken(accesstoken) {

    return new Promise((resolve, reject) => {

        JWT.verify(accesstoken, REFRESH_TOKEN_SECRET_KEY, async (error, payload) => {


            if (error) 
                reject(createHttpError.Unauthorized("دوباره وارد حساب کاربری خود بشوید"))


            


            const {mobile} = payload || {};


            const user = await UserModel.findOne({
                mobile
            }, {
                password: 0,
                otp: 0
            })


            if (! user) 
                reject(createHttpError.Unauthorized("کاربری با این مشخصات یافت نشد"))


            


            const refreshToken = await redisClient.get(user ?. _id.toString() || "key_default")

            if (refreshToken !== accesstoken) 
                reject(createHttpError.Unauthorized("ورود به حساب کاربری انجام نشد"))


            


            resolve(mobile);

        })


    })

}

function removeWrongData(obj = {}, blockList =[]) {

    Object.keys(obj).forEach(key => {
        if (blockList.includes(key)) 
            delete obj[key]
         else {
            if (typeof obj[key] === "string") 
                obj[key].trim()

            

            if (Array.isArray(obj[key]) && obj[key].length > 0) 
                obj[key] = obj[key].map(value => value.trim());
            


            if ([
                "",
                " ",
                0,
                null,
                undefined,
                "0",
                NaN
            ].includes(obj[key])) 
                delete obj[key]
            
        }


    })

}

function deleteFileInPublic(fileAddress) {
    if (fileAddress){
        const filePath = path.join(__dirname, "..", "..", "public", fileAddress);

        fs.unlinkSync(filePath);
    }
  
}

module.exports = {
    randomNumberGenerator,
    removeWrongData,
    signAccessToken,
    signRefreshToken,
    VerifyRefreshToken,
    deleteFileInPublic

}
