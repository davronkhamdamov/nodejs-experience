const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

function isDirectory(directionPath) {
    return fs.statSync(directionPath).isDirectory();
}

function readDir(files, directionPath) {
    const arr = files.map((e) => {
        return {
            real_path: directionPath + "\\" + e,
            path: e,
            isFile: fs.statSync(directionPath + "\\" + e).isFile(),
        };
    });
    return arr;
}

router.get("/list", (req, res, next) => {
    let direction_path = req.query.path;
    let delete_path = req.query["delete-path"];
    if (!direction_path && !delete_path) direction_path = "C:/Users";

    const directionPath = path.join(direction_path || delete_path);
    if (delete_path) {
        isDirectory(directionPath)
            ? fs.rmdirSync(directionPath)
            : fs.rmSync(directionPath);
        return fs.readdir(
            directionPath.split("\\").slice(0, -1).join("\\"),
            (err, files) => {
                if (err) throw err;
                res.render("files", {
                    data: readDir(
                        files,
                        directionPath.split("\\").slice(0, -1).join("\\")
                    ),
                });
            }
        );
    }
    if (isDirectory(directionPath)) {
        try {
            fs.readdir(directionPath, (err, files) => {
                if (err) throw err;
                res.render("files", { data: readDir(files, directionPath) });
            });
        } catch (error) {
            next(error);
        }
    } else {
        return res.sendFile(directionPath);
    }
});

module.exports = router;
