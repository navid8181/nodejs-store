const { CategoryController } = require('../../http/controller/admin/category.controller');


const  router = require('express').Router();


/**
 * 
 * 
 * @swagger
 *  /admin/category/add :
 *      post :
 *          tags : [(Category) Admin-Panel]    
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

router.post('/add',CategoryController.addCategory)


/**
 * 
 *@swagger
 *  /admin/category/parents :
 *      get :
 *          tags : [(Category) Admin-Panel]    
 *          summary : get all parents category (Category Heads)
 *          responses :
 *              200 :
 *               description : success 
 * 
 *      
 * 
 */

router.get('/parents',CategoryController.getAllParents)


/**
 * 
 *@swagger
 *  /admin/category/children/{parent} :
 *      get :
 *          tags : [(Category) Admin-Panel]    
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

 router.get('/children/:parent',CategoryController.getChildOfParents)



 /**
 * 
 *@swagger
 *  /admin/category/update/{id} :
 *      patch :
 *          tags : [(Category) Admin-Panel]    
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

 router.patch('/update/:id',CategoryController.editCategory)


 /**
 * 
 *@swagger
 *  /admin/category/all:
 *      get :
 *          tags : [(Category) Admin-Panel]    
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

 router.get('/all',CategoryController.getAllCategory)

  /**
 * 
 *@swagger
 *  /admin/category/all-list-categories:
 *      get :
 *          tags : [(Category) Admin-Panel]    
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

 router.get('/all-list-categories',CategoryController.getAllCategoryWithoutPopulate)


 /**
 * 
 * @swagger
 *  /admin/category/{id} :
 *      get :
 *          tags : [(Category) Admin-Panel]
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

 router.get('/:id',CategoryController.getCategoryByID)


 /**
 * 
 * @swagger
 *  /admin/category/remove/{id} :
 *      delete :
 *          tags : [(Category) Admin-Panel]
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

 router.delete('/remove/:id',CategoryController.removeCategory)

module.exports = {
    CategoryRoutes : router
}