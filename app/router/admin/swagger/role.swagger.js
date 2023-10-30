/**
 * 
 * 
 * @swagger
 *  components :
 *      schemas :
 *          Role :
 *              type : object
 *              required :
 *                  -   title
 *                  -   description
 *              properties :
 * 
 *                  title : 
 *                      type : string
 *                      description : title of Role
 * 
 *                  description : 
 *                      type : string
 *                      description : description of Role
 * 
 *                  permissions :
 *              
 *                      type : array
 *                      description : list of objectID
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
 *          Edit-Role :
 *              type : object
 * 
 * 
 *              properties :
 * 
 *                  title : 
 *                      type : string
 *                      description : title of Role
 * 
 *                  description : 
 *                      type : string
 *                      description : description of Role
 * 
 *                  permissions :
 *              
 *                      type : array
 *                      description : list of objectID
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
 *  /admin/role/add :
 *      post :
 *          tags : [Admin Panel-RBAC]
 *          summary : add Role 
 *          
 *          requestBody :
 * 
 *              content :
 *                   application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/Role'
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
 *  /admin/role/update/{id} :
 *      patch :
 *          tags : [Admin Panel-RBAC]
 *          summary : Update Role 
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
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/Edit-Role'
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
 *          ListOfRoles :
 *              type : object
 *              properties :
 *                  statusCode : 
 *                      type : Integer
 *                      example : 200
 *                  data :
 *                      type : object
 *                      properties :
 *                  
 *                          course :
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
 *                                          example : title of Role
 * 
 *                                      description :
 *                                          type : string
 *                                          example : description of Role
 *      
 *                                      permission :
 *                                          type : array
 *                                          items :
 *                                              type : object
 *                                              properties :
 *                                                  _id : 
 *                                                      type : string
 *                                                      example : "652550258655a5854c630922"
 *                                                  title : 
 *                                                      type : string
 *                                                      example : title Of permission
 *                                                  description : 
 *                                                      type : string
 *                                                      example : description of Role
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
 *  /admin/role/list :
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
 *                              $ref : '#/definitions/ListOfRoles'
 * 
 * 
 */


/**
 * 
 * 
 * @swagger
 *  /admin/role/delete/{field} :
 *      delete :
 *          tags : [Admin Panel-RBAC]
 *          summary : delete Role 
 *          
 *  
 *          parameters :
 *              -   in : path
 *                  name : field
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
