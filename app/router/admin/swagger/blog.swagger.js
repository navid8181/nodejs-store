





/**
 * 
 * 
 * @swagger
 *  /admin/blogs :
 *      get :
 *          tags : [(Blog)AdminPanel]   
 *          summary : get all Blogs
 *          
 *          parameters :
 *              -   in : header
 *                  name : accesstoken
 *                  type : string
 *                  example : Bearer [token]
 *                  value : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIwOTEwMzkxNDU3NiIsImlhdCI6MTY5MzEzMDQ4NywiZXhwIjoxNzI0Njg4MDg3fQ.GjFwfMc_yXrZsLRvbSMB_uS_Ju7JVOAlDtAJWY85CTc
 * 
 *          responses :
 *              200 :
 *                  description : success 
 *              
 * 
 * 
 */

   


/**
 * 
 * @swagger
 *  /admin/blogs/add :
 *      post :
 *          tags : [(Blog)AdminPanel]
 *          summary : create blog
 *          consumes :
 *              - multipart/form-data
 *              - application/x-www-form-urlencoded
 *          parameters :
 *              -   in : header
 *                  name : accesstoken
 *                  type : string
 *                  example : Bearer [token]
 *                  value : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIwOTEwMzkxNDU3NiIsImlhdCI6MTY5MzEzMDQ4NywiZXhwIjoxNzI0Njg4MDg3fQ.GjFwfMc_yXrZsLRvbSMB_uS_Ju7JVOAlDtAJWY85CTc
 *              -   in : formData
 *                  name : title
 *                  type : string
 *                  required : true
 *              
 *              -   in : formData
 *                  name : text
 *                  type : string
 *                  required : true               
 * 
 *              -   in : formData
 *                  name : short_text
 *                  type : string
 *                  required : true 
 * 
 *              -   in : formData
 *                  name : tags
 *                  example : tag1#tag2#tag_foo#foo-bar|| string || undefined
 *                  type : string
 *          
 *              -   in : formData
 *                  name : image
 *                  type : file
 *                  required : true
 *      
 *              -   in : formData
 *                  name : category
 *                  type : string
 *                  required : true
 * 
 * 
 * 
 * 
 *              
 *                                                        
 *          responses :
 *              200 : 
 *                  description : success 
 * 
 * 
 *              400 : 
 *                  description : bad request                 
 *      
 */

   




/**
 * 
 * @swagger
 *  /admin/blogs/update/{id} :
 *      patch :
 *          tags : [(Blog)AdminPanel]
 *          summary : update blog
 *          consumes :
 *              - multipart/form-data
 *              - application/x-www-form-urlencoded
 *          parameters :
 *              -   in : header
 *                  name : accesstoken
 *                  type : string
 *                  example : Bearer [token]
 *                  value : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIwOTEwMzkxNDU3NiIsImlhdCI6MTY5MzEzMDQ4NywiZXhwIjoxNzI0Njg4MDg3fQ.GjFwfMc_yXrZsLRvbSMB_uS_Ju7JVOAlDtAJWY85CTc
 *              -   in : formData
 *                  name : title
 *                  type : string
 * 
 *              -   in : path
 *                  name : id
 *                  type : string
 *                  required : true
 *               
 *              -   in : formData
 *                  name : text
 *                  type : string             
 * 
 *              -   in : formData
 *                  name : short_text
 *                  type : string
 * 
 *              -   in : formData
 *                  name : tags
 *                  example : tag1#tag2#tag_foo#foo-bar|| string || undefined
 *                  type : string
 *          
 *              -   in : formData
 *                  name : image
 *                  type : file
 *      
 *              -   in : formData
 *                  name : category
 *                  type : string
 * 
 * 
 * 
 * 
 *              
 *                                                        
 *          responses :
 *              200 : 
 *                  description : success 
 * 
 * 
 *              400 : 
 *                  description : bad request                 
 *      
 */







/**
 * 
 * @swagger
 *  /admin/blogs/{id} :
 *      get :
 *          tags : [(Blog)AdminPanel]
 *          summary : get blogs by id
 *          
 *          parameters :
  *              -   in : header
 *                  name : accesstoken
 *                  type : string
 *                  example : Bearer [token]
 *                  value : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIwOTEwMzkxNDU3NiIsImlhdCI6MTY5MzEzMDEwNywiZXhwIjoxNzI0Njg3NzA3fQ.8T4fgiy7IDtUWkpycc9O9EJKa-hZeHP_hVG33bXgYjc 
 *              -   in : path
 *                  name : id
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success
 *              
 *              
 *              
 *      
 * 
 * 
 */
    


    /**
 * 
 * @swagger
 *  /admin/blogs/{id} :
 *      delete :
 *          tags : [(Blog)AdminPanel]
 *          summary : delete blogs by id
 *          
 *          parameters :
  *              -   in : header
 *                  name : accesstoken
 *                  type : string
 *                  example : Bearer [token]
 *                  value : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIwOTEwMzkxNDU3NiIsImlhdCI6MTY5MzEzMDEwNywiZXhwIjoxNzI0Njg3NzA3fQ.8T4fgiy7IDtUWkpycc9O9EJKa-hZeHP_hVG33bXgYjc 
 *              -   in : path
 *                  name : id
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success
 *              
 *              
 *              
 *      
 * 
 * 
 */