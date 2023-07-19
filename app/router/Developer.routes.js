const router = require('express').Router();

const bcrypt = require('bcrypt');


/**
 * 
 *  
 * @swagger
 *  tags :
 *      name : Developer-Routes
 *      description : Developer Utils  
 * 
 * 
 */
 



/**
 * 
 * 
 * @swagger
 *  /developer/password-hash/{password} :
 *      get:
 *          tags : [Developer-Routes]          
 *          description : hashData with bcrypt
 *          
 *          parameters :
 *              -   in : path
 *                  type : string
 *                  name : password
 *                  required : true 
 * 
 *          responses :
 *              200 : 
 *                  description : success                                                                                    
 *          
 * 
 */

  

router.get('/password-hash/:password',(req,res,next)=>{

    const salt = bcrypt.genSaltSync(10);
    const {password} = req.params
    return res.json({
        hashPassword : bcrypt.hashSync(password,salt)
    })



})






module.exports = {
    DeveloperRoutes : router
}