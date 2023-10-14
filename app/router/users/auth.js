const { UserAuthController } = require('../../http/controller/user/auth/auth.controller');

const router  = require('express').Router();



router.post("/refresh-token",UserAuthController.refreshToken)
router.post("/check-otp",UserAuthController.checkOtp)
router.post("/get-otp",UserAuthController.getOtp)
module.exports = {
    UserAuthRoutes : router
}