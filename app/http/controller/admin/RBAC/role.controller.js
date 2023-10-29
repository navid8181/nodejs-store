const createHttpError = require("http-errors");
const {roleModel} = require("../../../../models/role");
const Controller = require("../../controller");
const {StatusCodes: httpStatus} = require('http-status-codes');
const { createRoleSchema } = require("../../../validators/admin/role.schema");
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

            const {title,permissions} = await createRoleSchema.validateAsync(req.body)
            await this.checkRoleExist(title)


            const role = await roleModel.create({title,permissions})

            if (!role)
                throw createHttpError.InternalServerError("نقش ایجاد نشد")

            return res.status(httpStatus.CREATED).json({

                statusCode : httpStatus.CREATED,
                data  : {
                    message : "نقش با موفقیت ایجاد شد"
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

        const role = roleModel.findOne({title})

        if (role) 
            throw createHttpError.NotFound("نقش مورد نظر قبلا ثبت شده است")

        

        

    }


}


module.exports = {
    roleController: new RoleController()
}
