const homeController = require('../../http/controller/api/home.controller');

const router = require('express').Router();

router.post("/",homeController.indexPage)

module.exports  = {
    HomeRoutes : router
}