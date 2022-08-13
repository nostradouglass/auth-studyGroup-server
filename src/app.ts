let express = require("express");
let cookieParser = require("cookie-parser");
let path = require("path");
let indexRouter = require("./routes/index");

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

module.exports = app;
