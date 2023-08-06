const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({

    title : {type : String , required : true},
    parent : {type : mongoose.Types.ObjectId,ref : "category",default : undefined}

},{
    id : false,
    versionKey : false,
    toJSON : {
        virtuals : true
    }
})

schema.virtual("children",{

    ref : "category",
    localField : "_id",
    foreignField : "parent"

})

schema.pre("find",autoPopulate)


schema.pre("findOne",autoPopulate)

function autoPopulate (next){

    this.populate([{path : "children",select : {_id : 0,__v : 0}}])

    next();

}
module.exports = {

    CategoryModel : mongoose.model("category",schema)

}