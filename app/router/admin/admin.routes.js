const { VerifyAccessToken } = require('../../http/middlewares/VerifyAccessToken');
const { AdminApiBlogRoutes } = require('./Blog');
const { AdminApiCategoryRoutes } = require('./category');
const { adminAPiCourseRouter } = require('./course');
const { AdminApiProductRouter } = require('./product');

const router = require('express').Router();


/**
 * @swagger
 *  tags :
 *      -   name : Admin Panel-Courses 
 *          description : action of admin Courses (add,remove,update,...)
 * 
 *      -   name : Admin Panel-Product 
 *          description : action of admin Product (add,remove,update,...)
 *        
 *      -   name : Admin-Panel 
 *          description : action of admin exm (add,remove,update,...)
 *      -  name : (Category)AdminPanel
 *         description : all Action for Category
 *      -  name : (Blog)AdminPanel
 *         description : made blog management By Admin
 * 
 */

router.use("/products",AdminApiProductRouter)
router.use('/category',AdminApiCategoryRoutes)
router.use("/blogs",AdminApiBlogRoutes)
router.use("/courses",adminAPiCourseRouter)

module.exports = {
    AdminRoutes : router
}