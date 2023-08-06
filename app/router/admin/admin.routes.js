const { CategoryRoutes } = require('./category');

const router = require('express').Router();


/**
 * @swagger
 *  tags :
 *        
 *      -   name : Admin-Panel 
 *          description : action of admin exm (add,remove,update,...)
 * 
 * 
 *      -  name : (Category) Admin-Panel
 *         description : all Action for Category
 * 
 */


router.use('/category',CategoryRoutes)


module.exports = {
    AdminRoutes : router
}