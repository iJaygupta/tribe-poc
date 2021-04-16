var express = require("express");
var authRouter = require("./auth");
var userRouter = require("./user");
var notificationRouter = require("./notification");

var app = express();

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/notification", notificationRouter);


module.exports = app;