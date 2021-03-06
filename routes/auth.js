var express = require("express");
const AuthController = require("../controllers/auth");

var router = express.Router();

router.post("/register", AuthController.register);
router.post("/login", AuthController.authLogin);


module.exports = router;