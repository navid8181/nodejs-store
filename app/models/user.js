const { default: mongoose } = require("mongoose");
const { ROLE } = require("../utils/Constant");

const schema = new mongoose.Schema({
    first_name : {type : String },
    last_name : {type : String },
    userName : {type : String ,lowercase : true},
    mobile : {type : String,required : true },
    email : {type : String,lowercase : true },
    password : {type : String },
    otp : {type : Object , default : {

        code : 0,
        expiresIn : 0

    }},

    bills : { type : [],default : []},

    discount : {type : Number , default : 0},
    birthDay : {type : String },
    Role : {type : String, default : ROLE.USER},
    courses : {type : [mongoose.Types.ObjectId],ref : "course", default : []}

})

schema.index({first_name : "text",last_name : "text",mobile : "text",email : "text"})

module.exports = {

    UserModel : mongoose.model("user",schema)

}