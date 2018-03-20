var express = require('express');
var router = express.Router();
const Service = require("../models/Order");
const controller = require("../controllers/services.controller");

/* GET users listing. */
router.get('/', controller.getServices);
router.post('/', controller.postServices);
router.get('/:id', controller.getService);
router.patch('/:id', controller.patchList);
router.delete('/:id', controller.deleteList);
//update
module.exports = router;

