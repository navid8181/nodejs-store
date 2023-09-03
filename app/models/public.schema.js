const { default: mongoose } = require("mongoose");


const commentSchema = new mongoose.Schema({

    user : {type : mongoose.Types.ObjectId,ref : "users",required : true},
    comment : {type : String ,required : true},
    createAt : {type : Date,default : new Date().getTime()},
    parent : {type : mongoose.Types.ObjectId,ref : "comments",default : undefined}



})

module.exports = commentSchema