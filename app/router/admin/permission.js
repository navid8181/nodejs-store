const { permissionController } = require('../../http/controller/admin/RBAC/permission.controller');

const router = require('express').Router();


router.get("/list",permissionController.getAllPermissions)
router.post("/add",permissionController.createNewPermission)

router.delete("/delete/:id",permissionController.deletePermissions)

router.patch("/update/:id",permissionController.updatePermissionByID)

module.exports = {
    AdminApiPermissionRouter : router
}