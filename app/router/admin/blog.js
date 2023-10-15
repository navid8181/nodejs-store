const { AdminBlogController } = require('../../http/controller/admin/blog/blog.controller');
const { StringToArray } = require('../../http/middlewares/StringToArray');
const { VerifyAccessToken } = require('../../http/middlewares/VerifyAccessToken');
const multerErrorHandler = require('../../http/middlewares/multerErrorHandler');
const { uploadFile } = require('../../utils/multer');

const router = require('express').Router();





    router.delete("/:id",AdminBlogController.deleteBlogById);
    router.get("/:id",AdminBlogController.getOneBlogById);
    router.patch ("/update/:id",uploadFile.single("image"),multerErrorHandler,StringToArray("tags"),AdminBlogController.updateBlogById)
    router.post ("/add",uploadFile.single("image"),multerErrorHandler,StringToArray("tags"),AdminBlogController.createBlog)
    router.get ("/",AdminBlogController.getListOfBlogs)
module.exports = {


   AdminApiBlogRoutes : router

    
}