const { default: mongoose } = require("mongoose");
const commentSchema = require("./public.schema");

const schema = new mongoose.Schema({

    title : {type : String , required : true},
    short_text : {type : String , required : true},
    text : {type : String , required : true},
    image : {type : [String] , required : true},
    tags : {type : [String] ,  default : []},
    category : {type : mongoose.Types.ObjectId,ref : "category" , required : true},
    comments : {type : [commentSchema] ,  default : []},
    likes : {type : [mongoose.Types.ObjectId] ,  default : []},
    dislikes : {type : [mongoose.Types.ObjectId] , default : []},
    bookmarks : {type : [mongoose.Types.ObjectId] , default : []},
    price : {type : Number ,  default : 0},
    discount : {type : Number , default : 0},
    count: {type : Number },
    type : {type : String ,required : true },
    time : {type : String },
    format : {type : String },
    supplier : {type : mongoose.Types.ObjectId , required : true , ref : "user"},
    features : {type : Object ,default : {
        length : "",
        height : "",
        with   : "",
        weight : "",
        colors  : [],
        model  : [],
        made_in : ""


    }}
   

})

schema.index({title : "text",short_text : "text",text : "text"})
schema.virtual("ImageURL").get(function(){
    return this.image.map(item => `${process.env.BASE_URL}:${process.env.PORT}/${item}`)
})
  
module.exports = {

    ProductModel : mongoose.model("product",schema)

}