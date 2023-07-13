const { HomeRoutes } = require('./api');
const { UserAuthRoutes } = require('./users/auth');

const router = require('express').Router();



router.use("/user",UserAuthRoutes)
router.use("/",HomeRoutes);




module.exports = {
    allRoutes : router
}