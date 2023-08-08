const { AdminBlogController } = require('../../http/controller/admin/blog.controller');
const { StringToArray } = require('../../http/middlewares/StringToArray');
const Uploader = require('../../http/middlewares/multerUpload');

const { uploadFile } = require('../../utils/multer');

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


/**
 * 
 * @swagger
 *  /admin/blogs/add :
 *      post :
 *          tags : [(Blog)AdminPanel]
 *          summary : create blog
 *          consumes :
 *              - multipart/form-data
 *              - application/xxx-www-form-data-urlencoded
 *          parameters :
 *              -   in : formData
 *                  name : title
 *                  type : string
 *                  required : true
 *              
 *              -   in : formData
 *                  name : text
 *                  type : string
 *                  required : true               
 * 
 *              -   in : formData
 *                  name : short_text
 *                  type : string
 *                  required : true 
 * 
 *              -   in : formData
 *                  name : tags
 *                  example : tag1#tag2#tag_foo#foo-bar|| string || undefined
 *                  type : string
 *          
 *      
 *              -   in : formData
 *                  name : category
 *                  type : string
 *                  required : true
 * 
 * 
 * 
 * 
 *              -   in : formData
 *                  name : image
 *                  type : file
 *                  required : true
 *              
 *                                                        
 *          responses :
 *              200 : 
 *                  description : success                  
 *      
 */

    router.post ("/add",uploadFile.single("image"),StringToArray("tags"),AdminBlogController.createBlog)


module.exports = {


BlogAdminApiRoutes : router

    
}