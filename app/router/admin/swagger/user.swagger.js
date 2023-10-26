
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