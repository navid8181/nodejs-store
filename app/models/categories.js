const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({

    title : {type : String , required : true}

})


module.exports = {

    CategoryModel : mongoose.model("category",schema)

}