var express = require("express");
const userController = require("../controllers/user");
const middleware = require("../lib/auth");



var router = express.Router();

router.post("/profile", middleware.verifyAccessToken, userController.updateUser);
router.post("/password", middleware.verifyAccessToken, userController.updateUserPassword);



module.exports = router;