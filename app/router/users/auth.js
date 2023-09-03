const { UserAuthController } = require('../../http/controller/user/auth/auth.controller');

const router  = require('express').Router();

/**
 * 
 * 
 * @swagger
 *  components :
 *      schemas :
 *          GetOtp:
 *              type : object
 *              required : 
 *                  -   mobile 
 *              properties :
 *                  mobile :
 *                      type : string
 *                      description : input mobile to 
 * 
 * 
 *          CheckOtp :
 *              type : object
 *              required : 
 *                  -   mobile
 *                  -   code
 *              
 *              properties :
 *                  mobile :
 *                      type : string
 *                      description : input mobile to  
 * 
 *                  code :
 *                      type : integer
 *                      description : the code that send to user
 *          
 * 
 */

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
 *  /user/get-otp :
 *      post :
 *          tags : [User Authentication]
 *          summary : login user in user panel with phone number
 *          description : one time password (otp) login
 *          
 *          requestBody :
 *              required : true
 *              content  : 
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/GetOtp'
 *                  
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/GetOtp'                    
 *                  
 *              
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


router.post("/get-otp",UserAuthController.getOtp)

/**
 * 
 * @swagger
 *  /user/check-otp :
 *      post :
 *          tags : [User Authentication]
 *          summary : check otp value in user controller
 *          description : check otp code with mobile code and expires data
 *          
 *          requestBody :
 *              required : true 
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/CheckOtp' 
 * 
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/CheckOtp'                  
 *                               
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
 *                  description : Internal Server Error *                       
 * 
 */

router.post("/check-otp",UserAuthController.checkOtp)


/**
 * 
 * @swagger
 *  /user/refresh-token :
 *      post :
 *          
 *          tags : [User Authentication]
 *          summary : send refresh-token and get new access token and new refresh token
 *          description : refresh token
 *          parameters :
 *          -   in : formData
 *              required : true
 *              type : string
 *              name : refreshToken                    
 *      
 *          responses :
 *                                          
 *              201:
 *                  description : Success                      
 *              400:    
 *                  description : bad request
 *              401:    
 *                  description : Unauthorized
 *              200:    
 *                  description : OK
 *              500:    
 *                  description : Internal Server Error *  * 
 * 
 */

router.post("/refresh-token",UserAuthController.refreshToken)
module.exports = {
    UserAuthRoutes : router
}