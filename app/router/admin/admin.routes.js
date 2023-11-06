const { VerifyAccessToken } = require('../../http/middlewares/VerifyAccessToken');
const { checkRole } = require('../../http/middlewares/permission.guard');
const { AdminApiBlogRoutes } = require('./Blog');
const { AdminApiCategoryRoutes } = require('./category');
const { adminApiChapterRouter } = require('./chapter');
const { adminAPiCourseRouter } = require('./course');
const { AdminApiEpisodeRouter } = require('./episode');
const { AdminApiPermissionRouter } = require('./permission');
const { AdminApiProductRouter } = require('./product');
const { AdminApiRoleRouter } = require('./role');
const { AdminApiUserRouter } = require('./user');

const router = require('express').Router();




router.use("/products",checkRole(["Suppler"]),AdminApiProductRouter)
router.use('/category',checkRole(["WRITER"]),AdminApiCategoryRoutes)
router.use("/blogs",checkRole(["WRITER"]),AdminApiBlogRoutes)
router.use("/courses",checkRole(["TEACHER"]),adminAPiCourseRouter)

router.use("/chapter",checkRole(["TEACHER"]),adminApiChapterRouter)
router.use("/Episode",checkRole(["TEACHER"]),AdminApiEpisodeRouter)

router.use("/user",AdminApiUserRouter)

router.use("/role",checkRole(["ADMIN"]),AdminApiRoleRouter)
router.use("/permission",checkRole(["ADMIN"]),AdminApiPermissionRouter)


module.exports = {
    AdminRoutes : router
}