/**
 * 
 * @swagger
 *  /admin/courses/add :
 *      post :
 *          tags : [Admin Panel-Courses]
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
 *                                  example : عنوان دوره    
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
 *                              image : 
 *                                  type : string  
 *                                  format : binary  
 *                                  
 *                              discount : 
 *                                  type : string   
 *  
 *                              type :
 *                                  type : string
 *                                  enum : [free,cash,special] 
 * 
 * 
 *                          required :
 *                              -   title
 *                              -   text
 *                              -   short_text
 *                              - category
 *                              - price
 *                              - image
 *                              - discount
 *                              - type
 * 
 *          responses :
 *              200 :
 *                  description : success
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/publicDefinitions'
 *              500 : 
 *                  description : error                       
 *         
 */









/**
 * 
 * 
 *  @swagger
 *      definitions :
 *          
 *          ListOfCourses :
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
 *                                          example : title of courses
 *                                      text :
 *                                          type : string
 *                                          example : text of courses
 *                                      short_text :
 *                                          type : string
 *                                          example : short_text of courses
 *                                      status :
 *                                          type : string
 *                                          example : status of courses ->(notStarted - completed - Holding)
 *                                      time :
 *                                          type : string
 *                                          example : 01:26:17
 *                                      price :
 *                                          type : Integer
 *                                          example : 250000
 *                                      discount :
 *                                          type : Integer
 *                                          example : 25
 *                                      studentCount :
 *                                          type : Integer
 *                                          example : 340
 *                                      teacher :
 *                                          type : string
 *                                          example : "navid rezaei"
 *      
 *      
 *                      
 * 
 */











/**
 * 
 * 
 * 
 * @swagger
 *  /admin/courses/list :
 *      get :
 *          tags : [Admin Panel-Courses]
 *          summary : get All courses
 *          
 *          parameters :
 *              -   in: query
 *                  name : search
 *                  type : text
 *                  description : searching in course
 *              
 *          responses : 
 *              200 :
 *                  description : Success
 *                  content :
 *                      application/json :
 *                          schema :                         
 *                              $ref : '#/definitions/ListOfCourses'
 * 
 */





/**
 * 
 * 
 * 
 * @swagger
 *  /admin/courses/{id} :
 *      get :
 *          tags : [Admin Panel-Courses]
 *          summary : get  courses BY ID
 *          
 *          parameters :
 *              -   in: path
 *                  name : id
 *                  type : text
 *                  description : id of course
 *              
 *          responses : 
 *              200 :
 *                  description : Success
 * 
 * 
 */



