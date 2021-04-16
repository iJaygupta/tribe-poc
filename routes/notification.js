var express = require("express");
const notificationController = require("../controllers/notification");



var router = express.Router();

router.get("/summary", notificationController.getNotifiations);
router.get("/count", notificationController.getNotifiationSummary);
router.post("/post/vote", notificationController.handlePostVoteNotification);
router.get("/notify", notificationController.sendNotificationFromFirebase);


module.exports = router;