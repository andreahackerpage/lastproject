var express = require('express');
var router = express.Router();
const Service = require("../models/Service");
const controller = require("../controllers/services.controller");

/* GET users listing. */
router.get('/', controller.getServices);
router.post('/', controller.postServices);

module.exports = router;

