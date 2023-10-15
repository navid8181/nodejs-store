
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