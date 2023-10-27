/**
 * 
 * 
 * @swagger
 *  components :
 *      schemas :
 *          Permission :
 *              type : object
 * 
 *              required :
 *                  -   title
 *                  -   description
 * 
 *              properties :
 * 
 *                  title : 
 *                      type : string
 *                      description : title of permission
 * 
 * 
 *                  description :
 *              
 *                      type : string
 *                      description : description of permission
 *                      
 *                      
 *                  
 *          
 *          
 * 
 */



/**
 * 
 * 
 * @swagger
 *  components :
 *      schemas :
 *          Edit-Permission :
 *              type : object
 * 
 * 
 *              properties :
 * 
 *                  title : 
 *                      type : string
 *                      description : title of permission
 * 
 * 
 *                  description :
 *              
 *                      type : string
 *                      description : description of permission
 *                      
 *                      
 *                  
 *          
 *          
 * 
 */



/**
 * 
 * 
 * @swagger
 *  /admin/permission/add :
 *      post :
 *          tags : [Admin Panel-RBAC]
 *          summary : add permission 
 *          
 *          requestBody :
 *              required : true
 * 
 *              content :
 *                  multipart/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/Permission'
 *                      
 *          
 *          
 *          responses :
 *              200 :
 *                  description : success
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/publicDefinitions'
 * 
 * 
 */


/**
 * 
 * 
 * @swagger
 *  /admin/permission/update/{id} :
 *      patch :
 *          tags : [Admin Panel-RBAC]
 *          summary : Update permission 
 *          
 *  
 *          parameters :
 *              -   in : path
 *                  name : id
 *                  type : string
 *                  required : true
 * 
 *  
 *          requestBody :
 *              required : true
 * 
 *              content :
 *                  multipart/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/Edit-Permission'
 *                      
 *          
 *          
 *          responses :
 *              200 :
 *                  description : success
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/publicDefinitions'
 * 
 * 
 */


/**
 * 
 * 
 *  @swagger
 *      definitions :
 *          
 *          ListOfPermission :
 *              type : object
 *              properties :
 *                  statusCode : 
 *                      type : Integer
 *                      example : 200
 *                  data :
 *                      type : object
 *                      properties :
 *                  
 *                          permission :
 *                              type : array
 *                              items :
 *                                  type : object
 *                                  properties :
 *                                      _id : 
 *                                          type : string
 *                                          example : "652550258655a5854c630922"
 *                          
 *                                      title :
 *                                          type : string
 *                                          example : title of permission
 * 
 *                                      description :
 *                                          type : string
 *                                          example : description of permission
 *      
 *  
 *                                              
 *      
 *                      
 * 
 */


/**
 * 
 * 
 * @swagger
 *  /admin/permission/list :
 *      get :
 *          tags : [Admin Panel-RBAC]
 *          summary : get list of Roles
 *          
 *                      
 *          
 *          
 *          responses :
 *              200 :
 *                  description : success
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/ListOfPermission'
 * 
 * 
 */



/**
 * 
 * 
 * @swagger
 *  /admin/permission/delete/{id} :
 *      delete :
 *          tags : [Admin Panel-RBAC]
 *          summary : delete permission 
 *          
 *  
 *          parameters :
 *              -   in : path
 *                  name : id
 *                  type : string
 *                  required : true
 * 
 *  
 *                      
 *          
 *          
 *          responses :
 *              200 :
 *                  description : success
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/publicDefinitions'
 * 
 * 
 */