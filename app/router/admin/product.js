const { ProductController } = require('../../http/controller/admin/Product.controller');
const { StringToArray } = require('../../http/middlewares/StringToArray');
const multerErrorHandler = require('../../http/middlewares/multerErrorHandler');
const { uploadFile } = require('../../utils/multer');

const router  = require('express').Router();

 
 router.post("/add",uploadFile.array("images",999),multerErrorHandler,StringToArray("tags","colors"),ProductController.addProduct)
 router.patch("/edit/:id",uploadFile.array("images",11),multerErrorHandler,StringToArray("tags","colors"),ProductController.editProduct)
 router.get("/all",ProductController.getAllProducts)
 router.get("/:id",ProductController.getOneProduct)
 router.delete("/delete/:id",ProductController.deleteProductById)

module.exports = {AdminApiProductRouter : router}