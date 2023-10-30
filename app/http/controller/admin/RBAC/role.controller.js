const createHttpError = require("http-errors");
const {roleModel} = require("../../../../models/role");
const Controller = require("../../controller");
const {StatusCodes: httpStatus} = require('http-status-codes');
const {createRoleSchema} = require("../../../validators/admin/RBAC.schema");
const {default: mongoose} = require("mongoose");
const { copyObject, removeWrongData } = require("../../../../utils/function");
class RoleController extends Controller {


    async getAllRoles(req, res, next) {

        try {

            const Roles = await roleModel.find({}).populate([{
                    path: "permissions"
                }])

            return res.status(httpStatus.OK).json({statusCode: httpStatus.OK, data: {
                    Roles
                }})

        } catch (error) {
            next(error)
        }

    }

    async createNewRole(req, res, next) {

        try {

            console.log(req.body);
            const {title, permissions} = await createRoleSchema.validateAsync(req.body)
            await this.checkRoleExist(title)


            const role = await roleModel.create({title, permissions})

            if (! role) 
                throw createHttpError.InternalServerError("نقش ایجاد نشد")

            

            return res.status(httpStatus.CREATED).json({

                statusCode: httpStatus.CREATED,
                data: {
                    message: "نقش با موفقیت ایجاد شد"
                }

            })


        } catch (error) {
            next(error)
        }

    }


    async deleteRole(req,res,next){

        try {

            const {field} = req.params;

            const role = await this.findRoleWithIdOrTitle(field)

            const deleteResult = await roleModel.deleteOne({_id : role._id})

            if (deleteResult.deletedCount == 0)
                throw createHttpError.InternalServerError("نقش حذف نشد")

            return res.status(httpStatus.OK).json({

                statusCode : httpStatus.OK,
                data : {
                    message : "نقش با موفقیت حذف شد"
                }

            })    

        } catch (error) {
            next(error)
        }

    }

    async updateRoleByID(req,res,next){

        try {

            const {id} = req.params;

            const role = await this.findRoleWithIdOrTitle(id)

            const data = copyObject(req.body)

            removeWrongData(data,[]);

            const updateResult = await roleModel.updateOne({_id : role._id},{
                $set : data
            })

            if (updateResult.modifiedCount === 0)
                throw createHttpError.InternalServerError("نقش ویرایش نشد")

            return res.status(httpStatus.OK).json({

                statusCode : httpStatus.OK,
                data : {
                    message : "نقش با موفقیت بروزرسانی شد"
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

    async checkRoleExist(title) {

        const role = await roleModel.findOne({title})

        if (role) 
            throw createHttpError.NotFound("نقش مورد نظر قبلا ثبت شده است")


        


    }


    async findRoleWithIdOrTitle(field) {

        let query = {}

        if (mongoose.isValidObjectId(field)) 
            query = {
                _id: field
            }
         else 
            query = {
                title: field
            }

        

        const role = await roleModel.findOne(query);
        if (! role) 
            throw createHttpError.NotFound("نقشی با این مشخصات یافت نشد")

        

        return role

    }

}


module.exports = {
    roleController: new RoleController()
}
