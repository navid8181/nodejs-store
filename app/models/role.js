const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({

    title : {type : String , unique : true},

    permissions : {type : [mongoose.Types.ObjectId],ref : 'permissions',default : []}


},{
    toJSON : {
        virtuals : true
    }
})


module.exports = {
    roleModel : mongoose.model("role",roleSchema)
}