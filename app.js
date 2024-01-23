const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const fileRouter = require("./routes/file");
const { upload } = require("./middleware/file");
// const { sendImage, getImage } = require("./routes/upload_file");
const fs = require("fs");
const { join } = require("path");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/code", usersRouter);
app.use("/files", fileRouter);
// app.use("/file", upload.single("file"), sendImage);
app.get("/getfile", async (req, res) => {
    const data = JSON.parse(
        fs.readFileSync(join(__dirname, "routes/data.json"), "utf-8")
    );
    res.render("file", { data });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
