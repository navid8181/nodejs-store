
/**
 * 
 *  @swagger
 *      components :
 *          schemas :
 *              AddChapter :
 *                  type : object
 *                  required :
 *                      -   id
 *                      -   title
 *                  properties : 
 *                      id :
 *                          type : string
 *                          example : "652550258655a5854c630922"
 * 
 * 
 *                      title :
 *                          type : string
 *                          example : chapter one zero to hero java
 *          
 *                      text :
 *                          type : string
 *                          example : description of courses
 * 
 * 
 *              EditChapter :
 *                  type : object
 * 
 * 
 *                  properties : 
 * 
 * 
 *                      title :
 *                          type : string
 *                          example : chapter one zero to hero java
 *          
 *                      text :
 *                          type : string
 *                          example : description of courses
 *                     
 *          
 * 
 * 
 */


/**
 * 
 * 
 * @swagger
 *  /admin/chapter/add :
 *      put :
 *          tags : [Admin Panel-Chapters]
 *          summary : add chapter to current Course
 *          
 *          requestBody :
 *              required : true
 * 
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/AddChapter'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/AddChapter'
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
 *          chapterOfCourseDefinitions :
 *              type : object
 *              properties :
 *                  statusCode :
 *                      type : Integer
 *                      example : 200
 *                  data :
 *                      type : object
 *                      properties :
 *                          course :
 *                              type : object
 *                              properties : 
 *                                  _id : 
 *                                      type : string 
 *                                      example : "652550258655a5854c630922"
 *                                  title : 
 *                                      type : string 
 *                                      example : "title of chapter"
 *                                  chapters : 
 *                                      type : array 
 *                                      items :
 *                                          type : object
 * 
 * 
 *                                      example : [{_id :"652550258655a5854c630922",title : "title"}]
 *                                      
 *                                          
 * 
 * 
 */


/**
 * 
 * 
 * @swagger
 *  /admin/chapter/list/{chapterID} :
 *      get :
 *          tags : [Admin Panel-Chapters]
 *          summary : add chapter to current Course
 *          
 *          parameters :
 *              -   in : path  
 *                  name : chapterID
 *                  required : true
 *                  type : string
 *                  example : "652550258655a5854c630922"
 *                      
 *          
 *          
 *          responses :
 *              200 :
 *                  description : success
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/chapterOfCourseDefinitions'
 * 
 * 
 */

/**
 * 
 * 
 * @swagger
 *  /admin/chapter/remove/{chapterID} :
 *      patch :
 *          tags : [Admin Panel-Chapters]
 *          summary : remove chapter to current Course
 *          
 *          parameters :
 *              -   in : path  
 *                  name : chapterID
 *                  required : true
 *                  type : string
 *                  example : "652550258655a5854c630922"
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
 *  /admin/chapter/update/{chapterID} :
 *      post :
 *          tags : [Admin Panel-Chapters]
 *          summary : update chapter to current Course
 *          
 *          parameters :
 *              -   in : path  
 *                  name : chapterID
 *                  required : true
 *                  type : string
 *                  example : "652550258655a5854c630922"
 *                  
 * 
 * 
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/EditChapter'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/EditChapter'
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