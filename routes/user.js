var express = require("express");
const userController = require("../controllers/user");


var router = express.Router();

router.post("/profile", userController.updateUser);


module.exports = router;