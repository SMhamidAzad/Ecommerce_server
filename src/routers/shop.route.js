const router = require('express').Router();
const shopController = require('../controllers/shop.controller')

router.post("/create",shopController.createShop)
router.get("/get",shopController.getShop)


module.exports = router;
