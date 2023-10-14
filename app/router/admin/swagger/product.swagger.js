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
 *                              images :
 *                                  type : array
 *                                  items :
 *                                      type : string
 *                                      format : binary
 *                              height :
 *                                  type : string
 *                              weight :
 *                                  type : string
 *                              with :
 *                                  type : string
 *                              length :
 *                                  type : string
 *                              colors :
 *                                  type : array
 *                                  items :
 *                                      type : string
 *                                      enum : [red,whit,blue,black]
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
 

/**
 * 
 * @swagger
 *  /admin/products/edit/{id} :
 *      patch :
 *          tags : [Admin Panel-Product]
 *          summary : create Product
 * 
 *          parameters :
 *              -   in : path
 *                  name : id
 *                  type : string
 *                  description : product ID
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
 *                                          
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
 *                              images :
 *                                  type : array
 *                                  items :
 *                                      type : string
 *                                      format : binary
 *                              height :
 *                                  type : string
 *                              weight :
 *                                  type : string
 *                              with :
 *                                  type : string
 *                              length :
 *                                  type : string
 *                              colors :
 *                                  type : array
 *                                  items :
 *                                      type : string
 *                                      enum : [red,whit,blue,black]
 * 
 * 
 *          responses :
 *              200 :
 *                  description : success
 *              500 : 
 *                  description : error                       
 *         
 */


/**
 * 
 * @swagger
 *  /admin/products/all :
 *      get :
 *          tags : [Admin Panel-Product]
 *          summary : get all product 
 *          parameters :
 *              -   in : query
 *                  name : search
 *                  type : string
 *                  description : search in product
 *          responses :
 *              200 :
 *                  description : success
 * 
 * 
 */



 /**
 * 
 * @swagger
 *  /admin/products/{id} :
 *      get :
 *          tags : [Admin Panel-Product]
 *          summary : get all product 
 *      
 *          parameters :
 *              -   in : path
 *                  name : id
 *                  type : string
 *                  description : id of product
 *          
 *          responses :
 *              200 :
 *                  description : success
 * 
 * 
 */

 
 /**
 * 
 * @swagger
 *  /admin/products/delete/{id} :
 *      delete :
 *          tags : [Admin Panel-Product]
 *          summary : delete  product by id
 *      
 *          parameters :
 *              -   in : path
 *                  name : id
 *                  type : string
 *                  description : id of product
 *          
 *          responses :
 *              200 :
 *                  description : success
 * 
 * 
 */
 