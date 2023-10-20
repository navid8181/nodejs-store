/**
 * 
 *  @swagger
 *      components :
 *          schemas :
 *              AddEpisode :
 *                  type : object
 *                  required :
 *                      -   text
 *                      -   title
 *                      -   chapterID
 *                      -   courseID
 *                      -   video
 *                      -   type
 *                  properties : 
 *                      courseID :
 *                          type : string
 *                          example : "652550258655a5854c630922"
 * 
 *                      chapterID :
 *                          type : string
 *                          example : "652d6a4b2a575f24ca5b0359"
 * 
 * 
 *                      title :
 *                          type : string
 *                          example : episode 01 variables
 *                          description : title of Episode
 *          
 *                      text :
 *                          type : string
 *                          example : description of Episode
 *                          description : text of Episode
 *                          
 * 
 *                      type :
 *                          type : string
 *                          enum : [unlock,lock]
 *                          description : lock | unlock
 * 
 * 
 *                      video :
 *                          type : string
 *                          description : video file of Episode
 *                          format : binary
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
 *  /admin/episode/add :
 *      post :
 *          tags : [Admin Panel-Episode]
 *          summary : add Episode to current Course
 *          
 *          requestBody :
 *              required : true
 * 
 *              content :
 *                  multipart/form-data :
 *                      schema :
 *                          $ref : '#/components/schemas/AddEpisode'
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