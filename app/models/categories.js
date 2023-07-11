const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({

    title : {type : String , required : true}

})


module.exports = {

    BlogModel : mongoose.model("category",schema)

}