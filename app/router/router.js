const {VerifyAccessToken} = require('../http/middlewares/VerifyAccessToken');
const { checkRole } = require('../http/middlewares/permission.guard');
const redisClient = require('../utils/init_redis');
const {DeveloperRoutes} = require('./Developer.routes');
const { AdminRoutes } = require('./admin/admin.routes');
const {HomeRoutes} = require('./api');
const {UserAuthRoutes} = require('./users/auth');

const router = require('express').Router();


// (async () => {


//     const setter  =  await redisClient.set("user1","0013")
//     const value = await redisClient.get("user1")

//     console.log(value," : " , setter);

// })();


router.use('/developer',DeveloperRoutes)

router.use('/admin',VerifyAccessToken,checkRole(["AA"]),AdminRoutes)

router.use("/user", UserAuthRoutes)



router.use("/", HomeRoutes);


module.exports = {
    allRoutes: router
}
