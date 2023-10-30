const createHttpError = require("http-errors");
const { permissionModel } = require("../../../../models/permission");
const { createPermissionSchema } = require("../../../validators/admin/RBAC.schema");
const Controller = require("../../controller");
const {StatusCodes: httpStatus} = require('http-status-codes');
const { copyObject, removeWrongData } = require("../../../../utils/function");

class PermissionController extends Controller {


        
    async getAllPermissions(req,res,next){

        try {

            const permissions = await permissionModel.find({});

            
            return res.status(httpStatus.OK).json({

                statusCode : httpStatus.OK,
                data : {
                    permissions
                }

            })




        } catch (error) {
            next(error)
        }

    }

    async deletePermissions(req,res,next){

        try {

            const {id} = req.params
            const permission = await this.findPermissionByID(id)

            const deletePermissionResult = await permissionModel.deleteOne({_id : permission._id})

            if (deletePermissionResult.deletedCount == 0)
                throw createHttpError.InternalServerError("دسترسی حذف نشد")



            
            return res.status(httpStatus.OK).json({

                statusCode : httpStatus.OK,
                data : {
                    message : "دسترسی با موفقیت حذف شد"
                }

            })




        } catch (error) {
            next(error)
        }

    }

    
    async createNewPermission(req, res, next) {

        try {

      
            const {name,description} = await createPermissionSchema.validateAsync(req.body)
            await this.checkPermissionExist(name)

            console.log(name);

            const permission = await permissionModel.create({name,description})

            if (!permission)
                throw createHttpError.InternalServerError("دسترسی ایجاد نشد")

            return res.status(httpStatus.CREATED).json({

                statusCode : httpStatus.CREATED,
                data  : {
                    message : "دسترسی با موفقیت ایجاد شد"
                }

            })


        } catch (error) {
            next(error)
        }

    }


    
    async updatePermissionByID(req,res,next){

        try {

            const {id} = req.params;

            const permission = await this.findPermissionByID(id)
            const data = copyObject(req.body)
            console.log(data);

            removeWrongData(data,[]);

            const updateResult = await permissionModel.updateOne({_id : permission._id},{
                $set : data
            })

            if (updateResult.modifiedCount === 0)
                throw createHttpError.InternalServerError("سطح دسترسی ویرایش نشد")

            return res.status(httpStatus.OK).json({

                statusCode : httpStatus.OK,
                data : {
                    message : "سطح دسترسی با موفقیت بروزرسانی شد"
                }

            })    

        } catch (error) {
            next(error)
        }

    }

    // async getAllRoles(req,res,next){

    //     try {

    //     } catch (error) {
    //         next(error)
    //     }

    // }


    
    async checkPermissionExist(name) {

        const permission = await permissionModel.findOne({name})

        if (permission) 
            throw createHttpError.NotFound("دسترسی مورد نظر قبلا ثبت شده است")

        

        

    }

    async findPermissionByID(_id){

        const permission = await permissionModel.findOne({_id})

        if (!permission)
            throw createHttpError.NotFound("چنین دسترسی یافت نشد")


        return permission;    



    }



}


module.exports  = {
    permissionController : new PermissionController()
}