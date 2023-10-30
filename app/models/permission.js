const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({

    name : {type : String , unique : true,sparse : true},

    description : {type : String,default : ""}


},
{
    toJSON : {
        virtuals : true
    }
})


module.exports = {
    permissionModel :  mongoose.model("permission",permissionSchema)
}