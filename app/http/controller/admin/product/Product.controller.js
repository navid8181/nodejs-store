const createHttpError = require("http-errors");
const {ProductModel} = require("../../../../models/product");
const {removeWrongData, deleteFileInPublic, listOfImages, copyObject} = require("../../../../utils/function");
const {createProductSchema} = require("../../../validators/admin/product.schema");
const {objectIdValidator} = require("../../../validators/public.validator");
const Controller = require("../../controller");
const path = require('path');

const {StatusCodes: httpStatus} = require('http-status-codes');

class ProductController extends Controller {


    async addProduct(req, res, next) {

        try {

            // console.log(  req.body);
            // console.log(req.files,req.filePath);
            const images = listOfImages(req ?. files || [], req.body.filePath)

            const productBody = await createProductSchema.validateAsync(req.body)
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

            let type = "virtual"

            if (width || height || weight || length) {

                type = "physical"
            }


            let features = this.addFeatures(req.body)


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
                features,
                type,
                image: images


            })


            res.json({

                statusCode: httpStatus.CREATED,
                data: {

                    message: "ثبت محصول با موفقیت انجام شد"


                }


            })
        } catch (error) {
            deleteFileInPublic(req.body.image)
            next(error)
        }


    }

    async editProduct(req, res, next) {

        try {

            const {id} = req.params;

           const product =  await this.findProductById(id)

            const data = copyObject(req.body)
            data.images = listOfImages(req ?. files || [], req.body.filePath)

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

            let type = "virtual"

            if (width || height || weight || length) {

                type = "physical"
            }

            let features = this.addFeatures(req.body)
            data.features = features
            removeWrongData(data,["comment","like","dislike","bookmark","supplier","with","height","weight","length","colors"])

            const updateProductResult = await ProductModel.updateOne({_id : product._id},{$set : data})

            if (updateProductResult.modifiedCount == 0) throw {statusCode : httpStatus.InternalServerError,message : "خطای داخلی"}

            res.status(httpStatus.OK).json({

                statusCode : httpStatus.OK,
                data :{
                    message : "محصول با موفقیت بروزرسانی شد"
                }


            })


        } catch (error) {
            next(error)
        }


    }


    async getAllProducts(req, res, next) {

        try {
            const search = req ?. query ?. search || "";

            let products;
            if (search !== "") {
                products = await ProductModel.find({

                    $text: {
                        $search: search
                    }

                })
            } else {
                products = await ProductModel.find({});
            }


            res.status( httpStatus.OK).json({
                statusCode: httpStatus.OK,
                data: {
                    products
                }
            })


        } catch (error) {
            next(error)
        }


    }


    async getOneProduct(req, res, next) {

        try {

            const {id} = req.params;

            const product = await this.findProductById(id);

            res.status(httpStatus.OK).json({

                statusCode: httpStatus.OK,
                data: {
                    product
                }


            })


        } catch (error) {
            next(error)
        }


    }
    async deleteProductById(req, res, next) {

        try {

            const {id} = req.params;

            await this.findProductById(id);

            const deleteResult = await ProductModel.deleteOne({_id: id})

            if (deleteResult.deletedCount == 0) 
                throw createHttpError.InternalServerError("محصول حذف نشد")


            


            res.status(httpStatus.OK).json({

                data: {
                    statusCode: httpStatus.OK,
                    message: "حذف محصول با موققیت انجام شد"
                }


            })


        } catch (error) {
            next(error)
        }


    }

    async findProductById(productId) {

        const {id} = await objectIdValidator.validateAsync({id: productId})

        const product = await ProductModel.findById(id)
        if (! product) 
            throw createHttpError.NotFound("محصولی با این مشخصات یافت نشد")


        


        return product;

    }

    addFeatures(body) {
        const colors = body.colors;
        const {width, height, weight, length} = body;
        let feature = {}


        if (width || height || weight || length) {


            feature.colors = colors
        }


        if (!width) 
            feature.width = 0
         else 
            feature.width = + width


        


        if (!height) 
            feature.height = 0
         else 
            feature.height = + height


        


        if (!weight) 
            feature.weight = 0
         else 
            feature.weight = + weight


        


        if (!length) 
            feature.length = 0
         else 
            feature.length = + length


        


        return feature;

    }
}


module.exports = {
    ProductController: new ProductController()
}
