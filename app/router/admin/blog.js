const { AdminBlogController } = require('../../http/controller/admin/blog.controller');

const router = require('express').Router();




/**
 * 
 * 
 * @swagger
 *  /admin/blogs :
 *      get :
 *          tags : [(Blog)AdminPanel]   
 *          summary : get all Blogs
 *          
 * 
 *          responses :
 *              200 :
 *                  description : success 
 *              
 * 
 * 
 */

    router.get ("/",AdminBlogController.getListOfBlogs)


module.exports = {


BlogAdminApiRoutes : router

    
}