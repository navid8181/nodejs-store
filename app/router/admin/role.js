const { roleController } = require('../../http/controller/admin/RBAC/role.controller');
const { StringToArray } = require('../../http/middlewares/StringToArray');

const router = require('express').Router();

router.get("/list",roleController.getAllRoles)

router.post("/add",StringToArray("permissions"),roleController.createNewRole)

router.delete("/delete/:field",roleController.deleteRole)

router.patch("/update/:id",StringToArray("permissions"),roleController.updateRoleByID)

module.exports = {
    AdminApiRoleRouter : router
}