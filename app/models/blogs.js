const { default: mongoose } = require("mongoose");
const commentSchema = require("./public.schema");





const schema = new mongoose.Schema({

    author : {type : mongoose.Types.ObjectId,ref : "user",required : true},
    title : {type : String,required : true},
    text : {type : String,required : true},
    short_text : {type : String,required : true},
    image : {type : String,required : true},
    tags : {type : [String],default : []},
    category: {type : mongoose.Types.ObjectId,ref : "category",required : true},
    comment : {type : [commentSchema],default : []},
    like : {type : [mongoose.Types.ObjectId],ref : "users",default : []},
    dislike : {type : [mongoose.Types.ObjectId],ref : "users",default : []},
    bookmark : {type : [mongoose.Types.ObjectId],ref : "users",default : []}

},{timestamps : true,versionKey : false,toJSON : {virtuals : true}})


schema.virtual("ImageURL").get(function(){
    return `${process.env.BASE_URL}:${process.env.PORT}/${this.image}`
})
  


module.exports = {

    BlogModel : mongoose.model("blog",schema)

}