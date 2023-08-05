const router = require('express').Router();
const userController = require('../controllers/user.Controller')

router.post("/",userController.createAuser)
router.get("/",userController.getAllUser)
router.get("/:id",userController.getAUser)
router.put("/bulk-update",userController.userBulkUpdate)
router.delete("/bulk-delete",userController.userBulkDelete)
router.put("/:id",userController.updateAuser)
router.delete("/:id",userController.userDeleteById)


module.exports = router;
