/**
 * 
 * 
 * @swagger
 *  /admin/category/add :
 *      post :
 *          tags : [(Category)AdminPanel]    
 *          summary : "create new category title"
 *          parameters :    
 *              -   in : formData
 *                  type : string
 *                  required : true
 *                  name : title
 *              -   in : formData
 *                  type : string
 *                  name : parent
 *          responses :
 *              201 : 
 *                  description : success 
 *             
 * 
 * 
 */




/**
 * 
 *@swagger
 *  /admin/category/parents :
 *      get :
 *          tags : [(Category)AdminPanel]    
 *          summary : get all parents category (Category Heads)
 *          responses :
 *              200 :
 *               description : success 
 * 
 *      
 * 
 */




/**
 * 
 *@swagger
 *  /admin/category/children/{parent} :
 *      get :
 *          tags : [(Category)AdminPanel]    
 *          summary : get all child of parents category 
 *          
 *          parameters :
 *              -   in : path
 *                  type : string
 *                  required : true
 *                  name : parent
 *          
 *          responses :
 *              200 :
 *               description : success 
 * 
 *      
 * 
 */

 



 /**
 * 
 *@swagger
 *  /admin/category/update/{id} :
 *      patch :
 *          tags : [(Category)AdminPanel]    
 *          summary : update category with id
 *          
 *          parameters :
 *              -   in : path
 *                  type : string
 *                  required : true
 *                  name : id
 * 
 *              -   in : formData
 *                  type : string
 *                  required : true,
 *                  name : title
 *          
 *          responses :
 *              200 :
 *               description : success 
 *              500 : 
 *               description : Internal Server Error
 * 
 *      
 * 
 */

 


 /**
 * 
 *@swagger
 *  /admin/category/all:
 *      get :
 *          tags : [(Category)AdminPanel]    
 *          summary : get all category 
 *          
 *          
 *          responses :
 *              200 :
 *               description : success 
 * 
 *      
 * 
 */



  /**
 * 
 *@swagger
 *  /admin/category/all-list-categories:
 *      get :
 *          tags : [(Category)AdminPanel]    
 *          summary : get  all-list-categories 
 *          
 *          
 *          responses :
 *              200 :
 *               description : success 
 * 
 *      
 * 
 */

 


 /**
 * 
 * @swagger
 *  /admin/category/{id} :
 *      get :
 *          tags : [(Category)AdminPanel]
 *          summary : get category by id     
 *          
 *          parameters :
 *              -   in : path
 *                  type : string
 *                  name : id
 *                  required : true
 *                  
 *          responses :
 *              200 : 
 *                  description : success
 *              500 : 
 *                  description : internal Server Error
 *             
 * 
 * 
 */

 


 /**
 * 
 * @swagger
 *  /admin/category/remove/{id} :
 *      delete :
 *          tags : [(Category)AdminPanel]
 *          summary : delete category by id     
 *          
 *          parameters :
 *              -   in : path
 *                  type : string
 *                  name : id
 *                  required : true
 *                  
 *          responses :
 *              200 : 
 *                  description : success
 *              500 : 
 *                  description : internal Server Error
 *             
 * 
 * 
 */

