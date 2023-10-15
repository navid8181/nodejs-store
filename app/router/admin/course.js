const ProductController = require('../../http/controller/admin/product/Product.controller');
const { CourseController } = require('../../http/controller/admin/course/course.controller');
const { StringToArray } = require('../../http/middlewares/StringToArray');
const multerErrorHandler = require('../../http/middlewares/multerErrorHandler');
const { uploadFile } = require('../../utils/multer');


const router = require('express').Router();




router.post("/add",uploadFile.single("image"),multerErrorHandler,StringToArray("tags"),CourseController.addCourse)
router.get("/list",CourseController.getListOfCourse)
router.get("/:id",CourseController.getCourseById)



module.exports  = {

    adminAPiCourseRouter : router

}