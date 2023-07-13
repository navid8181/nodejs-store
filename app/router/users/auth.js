const { UserAuthController } = require('../../http/controller/user/auth/auth.controller');

const router  = require('express').Router();


/**
 * 
 * @swagger
 * 
 *  tags :
 *      name : User Authentication
 *      description : user auth-section
 * 
 * 
 */


/**
 * 
 * @swagger
 *  /user/login :
 *      post :
 *          tags : [User Authentication]
 *          summary : login user in user panel with phone number
 *          description : one time password (otp) login
 *          
 *          parameters :
 *          -   name : mobile
 *              description : fa-IRI phone number
 *              in : formData
 *              required : true         
 *              type : string
 *          responses :
 *              201:
 *                  description : Success
 *              400:    
 *                  description : bad request
 *              401:    
 *                  description : Unauthorized
 *              200:    
 *                  description : OK
 *              500:    
 *                  description : Internal Server Error
 * 
 *                  
 *              
 *              
 * 
 * 
 */


router.post("/login",UserAuthController.login)


module.exports = {
    UserAuthRoutes : router
}