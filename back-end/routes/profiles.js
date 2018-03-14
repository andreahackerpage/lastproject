var express = require('express');
var router = express.Router();
const Profile = require("../models/Profile");
const controller = require("../controllers/profiles.controller");

/* GET users listing. */
router.get('/', controller.getProfiles);
router.post('/', controller.postProfiles);

module.exports = router;