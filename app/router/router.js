const { graphqlHTTP } = require('express-graphql');
const {VerifyAccessToken} = require('../http/middlewares/VerifyAccessToken');
const { checkRole } = require('../http/middlewares/permission.guard');
const { PERMISSION } = require('../utils/Constant');
const redisClient = require('../utils/init_redis');
const {DeveloperRoutes} = require('./Developer.routes');
const { AdminRoutes } = require('./admin/admin.routes');
const {HomeRoutes} = require('./api');
const {UserAuthRoutes} = require('./users/auth');
const { graphqlSchema } = require('../graphql/index.graphql');
const { graphqlConfig } = require('../utils/graphql.config');

const router = require('express').Router();


// (async () => {


//     const setter  =  await redisClient.set("user1","0013")
//     const value = await redisClient.get("user1")

//     console.log(value," : " , setter);

// })();


router.use('/developer',DeveloperRoutes)

router.use('/admin',VerifyAccessToken,AdminRoutes)

router.use("/user", UserAuthRoutes)


router.use('/graphql',graphqlHTTP(graphqlConfig))

router.use("/", HomeRoutes);


module.exports = {
    allRoutes: router
}
