const { VerifyAccessToken } = require('../../http/middlewares/VerifyAccessToken');
const { AdminApiBlogRoutes } = require('./Blog');
const { AdminApiCategoryRoutes } = require('./category');
const { adminApiChapterRouter } = require('./chapter');
const { adminAPiCourseRouter } = require('./course');
const { AdminApiProductRouter } = require('./product');

const router = require('express').Router();




router.use("/products",AdminApiProductRouter)
router.use('/category',AdminApiCategoryRoutes)
router.use("/blogs",AdminApiBlogRoutes)
router.use("/courses",adminAPiCourseRouter)

router.use("/chapter",adminApiChapterRouter)

module.exports = {
    AdminRoutes : router
}