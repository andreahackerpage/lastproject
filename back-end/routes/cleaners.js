var express = require('express');
var router = express.Router();
const Cleaner = require("../models/Cleaner");
const controller = require("../controllers/cleaners.controller");

/* GET users listing. */
router.get('/', controller.getCleaners);
router.post('/', controller.postCleaners);

module.exports = router;