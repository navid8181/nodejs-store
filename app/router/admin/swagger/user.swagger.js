
/**
 * 
 * @swagger
 *  components :
 *      schemas :
 *          Update-Profile :
 *              type : object
 *              properties :
 *              
 *                  first_name : 
 *                      type : string
 *                      description : name of user
 *                      example : navid  
 *   
 *                  last_name : 
 *                      type : string
 *                      description : last name of user
 *                      example : rezaei  
 *   
 *                  email : 
 *                      type : string
 *                      description : email; of user
 *                      example : nr5301804@gmail.com  
 *   
 *                  username : 
 *                      type : string
 *                      description : uniq ID of user
 *                      example : navid_rezaei_81    
 *  
 *          
 * 
 * 
 */





/**
 * 
 * 
 *  @swagger
 *      definitions :
 *          
 *          ListOfUser :
 *              type : object
 *              properties :
 *                  statusCode : 
 *                      type : Integer
 *                      example : 200
 *                  data :
 *                      type : object
 *                      properties :
 *                  
 *                          users :
 *                              type : array
 *                              items :
 *                                  type : object
 *                                  properties :
 *                                      _id : 
 *                                          type : string
 *                                          example : "652550258655a5854c630922"
 *                          
 *                                      first_name :
 *                                          type : string
 *                                          example : name of user
 *                                      last_name :
 *                                          type : string
 *                                          example : last name of user
 *                                      username :
 *                                          type : string
 *                                          example : uniq id if user
 *                                      email :
 *                                          type : string
 *                                          example : email address of user
 *      
 *      
 *                      
 * 
 */





/**
 * 
 * @swagger
 *  /admin/user/list :
 *      get :
 *          tags : [Admin Panel-Users]
 *          summary : get List of Users
 *      
 *          parameters :
 *              -   in : query
 *                  name : search
 *                  type : string
 *                  
 *          
 *          responses :
 *              200 :
 *                  description : success
 *                  content :
 *                      
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/publicDefinitions'
 *          
 * 
 */

/**
 * 
 * @swagger
 *  /admin/user/update-profile :
 *      patch :
 *          tags : [Admin Panel-Users]
 *          summary : update User
 *      
 * 
 *          requestBody :
 *              required : true
 * 
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#components/schemas/Update-Profile'
 * 
 *                  application/json :
 *                      schema :
 *                          $ref : '#components/schemas/Update-Profile'
 *                  
 *              
 *                  
 *          
 *          responses :
 *              200 :
 *                  description : success
 *                  content :
 *                      
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/ListOfUser'
 *          
 * 
 */