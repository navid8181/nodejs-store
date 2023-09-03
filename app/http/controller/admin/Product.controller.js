const {ProductModel} = require("../../../models/product");
const {removeWrongData, deleteFileInPublic} = require("../../../utils/function");
const {createProductSchema} = require("../../validators/admin/product.schema");
const Controller = require("../controller");
const path = require('path');

class ProductController extends Controller {


    async addProduct(req, res, next) {

        try { // console.log(  req.body);
            const productBody = await createProductSchema.validateAsync(req.body)
            req.body.image = (path.join(productBody.filePath, productBody.filename)).replace(/\\/g, "/")
            removeWrongData(req.body)
            const {
                title,
                text,
                short_text,
                category,
                tags,
                count,
                price,
                discount,
                width,
                height,
                weight,
                length
            } = req.body;
            const image = req.body.image;
            const supplier = req.user._id

            let feature = {},type = "virtual"

            if (width || height || weight || length)
            type = "physical"

            if (!width) 
                feature.width = 0
             else 
                feature.width = width

            

            if (!height) 
                feature.height = 0
             else 
                feature.height = height

            

            if (!weight) 
                feature.weight = 0
             else 
                feature.weight = weight

            

            if (!length) 
                feature.length = 0
             else 
                feature.length = length


            


            const product = await ProductModel.create({
                supplier,
                title,
                text,
                short_text,
                category,
                tags,
                count,
                price,
                discount,
                feature,
                type


            })


            res.json({

                data :{

                    statusCode : 201,
                    message : "ثبت محصول با موفقیت انجام شد"
                    


                }


            })
        } catch (error) {
            deleteFileInPublic(req.body.image)
            next(error)
        }


    }

    async editProduct(req, res, next) {

        try {} catch (error) {
            next(error)
        }


    }


    async removeProduct(req, res, next) {

        try {} catch (error) {
            next(error)
        }


    }

    async getAllProducts(req, res, next) {

        try {} catch (error) {
            next(error)
        }


    }


    async getOneProduct(req, res, next) {

        try {} catch (error) {
            next(error)
        }


    }
}


module.exports = {
    ProductController: new ProductController()
}
