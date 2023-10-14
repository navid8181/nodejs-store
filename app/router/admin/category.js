const { CategoryController } = require('../../http/controller/admin/category.controller');


const  router = require('express').Router();




 router.post('/add',CategoryController.addCategory)
 router.get('/parents',CategoryController.getAllParents)
 router.get('/children/:parent',CategoryController.getChildOfParents)
 router.patch('/update/:id',CategoryController.editCategory)
 router.get('/all',CategoryController.getAllCategory)
 router.get('/all-list-categories',CategoryController.getAllCategoryWithoutPopulate)
 router.get('/:id',CategoryController.getCategoryByID)
 router.delete('/remove/:id',CategoryController.removeCategory)

module.exports = {
    AdminApiCategoryRoutes : router
}