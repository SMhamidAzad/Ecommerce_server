const router = require('express').Router();
const userController = require('../controllers/user.Controller')

router.post("/users",userController.createAuser)
router.get("/users",userController.getAllUser)

module.exports = router;
