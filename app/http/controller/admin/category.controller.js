const createHttpError = require("http-errors");
const {CategoryModel} = require("../../../models/categories");
const Controller = require("../controller");
const {addCategorySchema, updateCategorySchema} = require("../../validators/admin/category.schema");
const {default: mongoose} = require("mongoose");

class CategoryController extends Controller {


    async addCategory(req, res, next) {

        try {
            await addCategorySchema.validateAsync(req.body)
            const {title, parent} = req.body;

            const category = await CategoryModel.create({title, parent})

            if (! category) 
                throw createHttpError.InternalServerError("خطای داخلی")


            


            return res.status(201).json({

                data: {
                    statusCode: 201,
                    message: "دسته بندی با موفقیت افزوده شد"
                }


            })


        } catch (error) {
            next(error)
        }

    }

    async removeCategory(req, res, next) {

        try {

            const {id} = req.params;

            const category = await this.checkExistCategory(id);

            const deleteResult = await CategoryModel.deleteMany({

                $or: [
                    {
                        _id: category.id
                    }, {
                        parent: category.id
                    }
                ]

            })

            if (deleteResult.deletedCount == 0) 
                throw createHttpError.InternalServerError("عملیات حذف ناموفق بود")

            

            return res.status(200).json({

                data: {
                    message: "عملیات حذف موفقیت آمیز بود"
                }

            })


        } catch (error) {
            next(error)
        }

    }


    async editCategory(req, res, next) {

        try {

            const {title} = req.body;

            const {id} = req.params;
            
            const category = await this.checkExistCategory(id);

            await updateCategorySchema.validateAsync(req.body)

            const  resultOfUpdate = await CategoryModel.updateOne({_id : id},{
                $set : {title}
            })

            if (resultOfUpdate.modifiedCount == 0) throw createHttpError.InternalServerError("خطای سرور فایل ذخیره نشد")


           return res.status(200).json({

            statusCode : 200,

            data : {

                message : "دسته بندی با موفقیت آپدیت شد"

            }

            })


        } catch (error) {
            next(error)
        }

    }

    async getAllCategory(req, res, next) {

        try {


            // const category = await CategoryModel.aggregate([

            //     {
            //         $graphLookup: {
            //             from: "categories",

            //             startWith: "$_id",
            //             connectFromField: "_id",
            //             connectToField: "parent",
            //             maxDepth: 5,
            //             depthField: "depth",

            //             as: "children"

            //         }
            //     }, {

            //         $project: {
            //             __v: 0,
            //             "children.__v": 0

            //         }
            //     }, {

            //         $match: {
            //             parent: undefined
            //         }
            //     }

            // ])

            const categories = await CategoryModel.find({parent : undefined},{__v : 0}).populate({path : "children",populate:{path : "children",model : "category",select : {_id : 0,__v : 0}},select : {_id : 0,__v : 0}});

            return res.status(200).json({

                data: {
                    statusCode: 200,
                    categories
                }


            })



        } catch (error) {
            next(error)
        }

    }

    async getAllCategoryWithoutPopulate(req,res,next){

        try {
            
            const categories = await CategoryModel.aggregate([
                {
                    $match : {}
                },
                {
                    $project : {
                        __v : 0
                    }
                }
            ])

           return  res.status(200).json({

                categories

            })


        } catch (error) {
            next (error)
        }

    }

    async getCategoryByID(req, res, next) {

        try {

            const {id } = req.params;

            const category = await CategoryModel.aggregate([

                {
                    $match : {
                        _id : new mongoose.Types.ObjectId(id)
                    }

                },
                {

                    $lookup : {
                        from : "categories",
                        localField : "_id",
                        foreignField : "parent",
                        as : "children"
                    }

                },
                {

                    $project : {
                        __v: 0,
                        parent : 0


                    }
                }


            ])


        

        
            return res.json({data: {
                statusCode : 200,
                category
            }})


            

        } catch (error) {
            next(error)
        }

    }

    async getAllParents(req, res, next) {

        try {

            const parents = await CategoryModel.find({
                parent: undefined
            }, {__v: 0})

            return res.json({data: {

                    parents

                }})

        } catch (error) {
            next(error)
        }

    }

    async getChildOfParents(req, res, next) {

        try {

            const {parent} = req.params

            const children = await CategoryModel.find({
                parent
            }, {
                __v: 0,
                parent: 0
            });

            return res.json({data: {
                    children
                }})


        } catch (error) {
            next(error)
        }

    }
    async checkExistCategory(id) {

        const category = await CategoryModel.findById(id)
        if (! category) 
            throw createHttpError.NotFound("دسته بندی یافت نشد");
        

        return category;

    }

}


module.exports = {

    CategoryController: new CategoryController()
}
