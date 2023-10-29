const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({

    title : {type : String , unique : true},

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