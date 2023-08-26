const router = require('express').Router();
const itemController = require('../controllers/item.controller')

router.get("/",itemController.getItem)
router.post("/create",itemController.createAnItem)

module.exports = router;
