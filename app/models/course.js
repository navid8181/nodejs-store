const { default: mongoose } = require("mongoose");
const commentSchema = require("./public.schema");


const episode  = new mongooses.schema({
    title : {type : String , required : true},
    text : {type : String ,  required : true},
    type : {type : String , default : "free"},
    time : {type : String ,  required : true},
})

const Chapter = new mongoose.Schema({

    title : {type : String , required : true},
    text : {type : String , default : ""},
    episode : {type : [episode],default : []}


})


const schema = new mongoose.Schema({

    title : {type : String , required : true},
    short_text : {type : String , required : true},
    text : {type : String , required : true},
    image : {type : String , required : true},
    tags : {type : [String] ,  default : []},
    category : {type : mongoose.Types.ObjectId,ref : "category" , required : true},
    comments : {type : [commentSchema] ,  default : []},
    likes : {type : [mongoose.Types.ObjectId] ,  default : []},
    dislikes : {type : [mongoose.Types.ObjectId] , default : []},
    bookmarks : {type : [mongoose.Types.ObjectId] , default : []},
    price : {type : Number ,  default : 0},
    discount : {type : Number , default : 0},
    type : {type : String ,default : "free" },
    time : {type : String,default : "00:00:00" },
    format : {type : String },
    teacher : {type : mongoose.Types.ObjectId , required : true},
    chapters : {type : [Chapter],default : []},
    students : {type  : [mongoose.Types.ObjectId],ref : "user",default : []}
   

})


module.exports = {

    CourseModel : mongoose.model("course",schema)

}