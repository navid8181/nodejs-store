const homeController = require('../../http/controller/api/home.controller');

const router = require('express').Router();

/**
 * @swagger
 * 
 * tags :
 *  name : index Page
 *  description : index page routes and data      
 * 
 * 
 * 
 */     

/**
 * 
 * @swagger
 * tag : index Page
 * 
 * /:  
 *  get:
 *          tags : [index Page]
 *          summary : index of allRoutes
 *          description : get all data on index routes
 *                  
 *          responses :
 *              200:
 *                   description : success                    
 *              404:                   
 *                  description : not found
 *                                                     
 *              
 *              
 * 
 * 
 */

router.get("/",homeController.indexPage)

module.exports  = {
    HomeRoutes : router
}