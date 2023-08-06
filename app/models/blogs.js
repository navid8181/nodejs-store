const { default: mongoose } = require("mongoose");


const commentSchema = new mongoose.schema({

    user : {type : mongoose.Types.ObjectId,ref : "users",required : true},
    comment : {type : String ,required : true},
    createAt : {type : Date,default : new Date().getTime()},
    parent : {type : mongoose.Types.ObjectId}



})


const schema = new mongoose.Schema({

    author : {type : mongoose.Types.ObjectId,required : true},
    title : {type : String,required : true},
    text : {type : String,required : true},
    image : {type : String,required : true},
    tags : {type : [String],default : []},
    category: {type : [mongoose.Types.ObjectId],required : true},
    comment : {type : [commentSchema],default : []},
    like : {type : [mongoose.Types.ObjectId],ref : "users",default : []},
    dislike : {type : [mongoose.Types.ObjectId],ref : "users",default : []},
    bookmark : {type : [mongoose.Types.ObjectId],ref : "users",default : []}

})


module.exports = {

    BlogModel : mongoose.model("blog",schema)

}