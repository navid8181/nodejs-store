const { BlogAdminApiRoutes } = require('./Blog');
const { CategoryRoutes } = require('./category');

const router = require('express').Router();


/**
 * @swagger
 *  tags :
 *        
 *      -   name : Admin-Panel 
 *          description : action of admin exm (add,remove,update,...)
 *      -  name : (Category)AdminPanel
 *         description : all Action for Category
 *      -  name : (Blog)AdminPanel
 *         description : made blog management By Admin
 * 
 */


router.use('/category',CategoryRoutes)
router.use("/blogs",BlogAdminApiRoutes)

module.exports = {
    AdminRoutes : router
}