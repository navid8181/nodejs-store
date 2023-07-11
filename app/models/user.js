const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
    first_name : {type : String },
    last_name : {type : String },
    userName : {type : String },
    phone : {type : String },
    email : {type : String },
    password : {type : String },
    otp : {type : Object , default : {

        code : 0,
        expires : 0

    }},

    bills : { type : [],default : []},

    discount : {type : Number },
    birthDay : {type : String }

})


module.exports = {

    UserModel : mongoose.model("user",schema)

}