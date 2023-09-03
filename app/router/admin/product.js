const { ProductController } = require('../../http/controller/admin/Product.controller');
const { StringToArray } = require('../../http/middlewares/StringToArray');
const multerErrorHandler = require('../../http/middlewares/multerErrorHandler');
const { uploadFile } = require('../../utils/multer');

const router  = require('express').Router();

/**
 * 
 * @swagger
 *  components :
 *      schemas :
 *          product :
 *              type : object
 *              required:
 *                  -   title 
 *                  -   short_text
 *                  -   text
 *                  -   tag
 *                  -    category
 *                  -   price
 *                  -   discount
 *                  -   count 
 * 
 *              properties :
 *                  title :
 *                      type : string
 *                      description : title of product
 *                  text :
 *                      type : string
 *                      description : text of product
 *                  short_text :
 *                      type : string
 *                      description : short_text of product
 *                  tags :
 *                      type : array
 *                      description : tags of product
 *                  category :
 *                      type : string
 *                      description : category id of product
 *                  price :
 *                      type : string
 *                      description : price of product
 *                  count :
 *                      type : string
 *                      description : count of product
 *                  discount :
 *                      type : string
 *                      description : discount of product
 *                  image :
 *                      type : file
 *                      description : image of product
 *                  
 *          
 * 
 * 
 */



/**
 * 
 * @swagger
 *  /admin/products/add :
 *      post :
 *          tags : [Admin Panel-Product]
 *          summary : create Product
 * 
 *          requestBody : 
 * 
 *              content :   
 * 
 *                  multipart/form-data :
 * 
 *                      schema :
 *                          $ref : '#/components/sv'
 *                          type : object
 * 
 *                          properties :
 *                              title : 
 *                                  type : string    
 *                              text : 
 *                                  type : string    
 *                              short_text : 
 *                                  type : string    
 *                              tags : 
 *                                  type : array    
 *                              category : 
 *                                  type : string    
 *                              price : 
 *                                  type : string    
 *                              count : 
 *                                  type : string    
 *                              discount : 
 *                                  type : string    
 *                              image :
 *                                  type : string
 *                                  format : binary
 *                              height :
 *                                  type : string
 *                              weight :
 *                                  type : string
 *                              with :
 *                                  type : string
 *                              length :
 *                                  type : string
 * 
 * 
 * 
 *                          required :
 *                              -   title
 *                              -   text
 *                              -   short_text
 *                              - category
 *                              - price
 *                              - count
 *                              - discount
 * 
 *          responses :
 *              200 :
 *                  description : success
 *              500 : 
 *                  description : error                       
 *         
 */
 router.post("/add",uploadFile.single("image"),multerErrorHandler,StringToArray("tags"),ProductController.addProduct)


module.exports = {AdminApiProductRouter : router}