const joi = require('joi');


const authSchema = joi.object({

    mobile: joi.string().length(11).pattern(/^09[0-9]{9}$/).error(new Error("شماره وارد شده صحیح نمی باشد"))

})

module.exports = {
    authSchema
}
