var express = require('express');
var router = express.Router();
const controller = require("../controllers/users.controller");

/* GET users listing. */
router.get('/', controller.getLists);

module.exports = router;






