const { VerifyAccessToken } = require('../../http/middlewares/VerifyAccessToken');
const { AdminApiBlogRoutes } = require('./Blog');
const { AdminApiCategoryRoutes } = require('./category');
const { adminApiChapterRouter } = require('./chapter');
const { adminAPiCourseRouter } = require('./course');
const { AdminApiEpisodeRouter } = require('./episode');
const { AdminApiProductRouter } = require('./product');
const { AdminApiUserRouter } = require('./user');

const router = require('express').Router();




router.use("/products",AdminApiProductRouter)
router.use('/category',AdminApiCategoryRoutes)
router.use("/blogs",AdminApiBlogRoutes)
router.use("/courses",adminAPiCourseRouter)

router.use("/chapter",adminApiChapterRouter)
router.use("/Episode",AdminApiEpisodeRouter)

router.use("/user",AdminApiUserRouter)

module.exports = {
    AdminRoutes : router
}