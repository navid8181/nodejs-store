const createHttpError = require('http-errors');
const JWT = require('jsonwebtoken');
const {UserModel} = require('../models/user');
const {SECRET_KEY} = require('./Constant');


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
            expiresIn: "1h"
        };


        JWT.sign(payload, SECRET_KEY, option, (error, token) => {

            if (error) 
                reject(createHttpError.InternalServerError("خطایی در سرور رخ داد"));
            


            resolve(token);


        })


    })


}


function removeWrongData(obj = {}) {

    Object.keys(obj).forEach(key => {

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


        


    })

}


module.exports = {
    randomNumberGenerator,
    removeWrongData,
    signAccessToken

}
