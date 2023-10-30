const createHttpError = require("http-errors");
const {permissionModel} = require("../../models/permission");
const {roleModel} = require("../../models/role");

function checkRole(requiredPermission =[]) {


    return async (req, res, next) => {

        try {

            const userRole = req.user.Role;

            const role = await roleModel.findOne({title: userRole})

            const permissions = await permissionModel.find({
                _id: {
                    $in: role.permissions
                }
            })


            const mapNames = permissions.map(item => item.name)
            
            const permissionMapName = new Map()
            mapNames.forEach(item =>permissionMapName.set(item,0))
            console.log(permissionMapName);

            const hasPermission = requiredPermission.every(item => {
                return permissionMapName.has(item)
            })

            if (! hasPermission) 
                throw createHttpError.Forbidden("شما به این قسمت دسترسی ندارید")

    
            return next();

        } catch (error) {
            next(error)
        }


    }


}


module.exports = {
    checkRole
}