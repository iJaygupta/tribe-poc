var express = require("express");
var authRouter = require("./auth");
var userRouter = require("./user");


var app = express();

app.use("/auth", authRouter);
app.use("/user", userRouter);


module.exports = app;