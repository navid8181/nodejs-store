const { default: mongoose } = require("mongoose");
const commentSchema = require("./public.schema");


const episode  = new mongoose.Schema({
    title : {type : String , required : true},
    text : {type : String ,  required : true},
    type : {type : String , default : "unlock"},
    time : {type : Date ,  required : true},
    videoAddress : {type : String,required : true}
},{toJSON :{
    virtuals : true
}})
episode.virtual("videoURL").get(function(){
    return `${process.env.BASE_URL}:${process.env.PORT}/${this.videoAddress}`
})
const Chapter = new mongoose.Schema({

    title : {type : String , required : true},
    text : {type : String , default : ""},
    totalTime : {type : Date,default : new Date(0)},
    episode : {type : [episode],default : []}


})


const courseSchema = new mongoose.Schema({

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
    status : {type : String,default : "notStarted"/* notStarted - completed - Holding */},
    time : {type : String,default : "00:00:00" },
    format : {type : String },
    teacher : {type : mongoose.Types.ObjectId,ref : "user" , required : true},
    chapters : {type : [Chapter],default : []},
    students : {type  : [mongoose.Types.ObjectId],ref : "user",default : []}
   

},{
    toJSON : {
        virtuals : true
    }
})

    courseSchema.index({title : "text",short_text :"text",text : "text"})

    courseSchema.virtual("imageURL").get(function(){
        return `${process.env.BASE_URL}:${process.env.PORT}/${this.image}`
    })

module.exports = {

    CourseModel : mongoose.model("course",courseSchema)

}